import fs from 'node:fs';
import path from 'node:path';
import util from 'node:util';
import { QuestionMetadata, QuestionRaw } from './types';
import { parse } from 'csv-parse/sync';

const readFileAsync = util.promisify(fs.readFile);

function readQuestionsSheet(): Record<string, QuestionRaw> {
  const csvFile = fs.readFileSync(
    path.join(process.cwd(), 'data', 'react-questions.csv'),
  );

  const records = parse(csvFile.toString(), {
    columns: true,
    skip_empty_lines: true,
  });
  const recordsDict: Record<string, QuestionRaw> = {};
  (records as QuestionRaw[]).forEach((row) => (recordsDict[row.slug] = row));
  return recordsDict;
}
const qnsDict = readQuestionsSheet();

async function syncQuestion(qnSlug: string, locale: string = 'en-US') {
  const questionDirectory = path.join('./questions', qnSlug);
  const directoryExists = fs.existsSync(questionDirectory);

  if (!directoryExists) {
    fs.mkdirSync(path.join(process.cwd(), questionDirectory));
    fs.cpSync(
      path.join(process.cwd(), '__template__', 'todo-change-me'),
      path.join(process.cwd(), questionDirectory),
      { recursive: true },
    );
  }

  const metadataPath = path.join(questionDirectory, 'metadata.json');
  const markdownPath = path.join(questionDirectory, `${locale}.mdx`);

  const [metadataFile, markdownFile] = await Promise.all([
    readFileAsync(metadataPath),
    readFileAsync(markdownPath),
  ]);

  const metadata: QuestionMetadata = JSON.parse(String(metadataFile));

  const qnRaw = qnsDict[qnSlug];
  const newMetadata = {
    ...metadata,
    slug: qnRaw.slug,
    ranking: +qnRaw.ranking,
    section: qnRaw.section,
  };

  fs.writeFileSync(metadataPath, JSON.stringify(newMetadata, null, 2) + '\n');

  const newMarkdownFile = markdownFile
    .toString()
    .replace('TODO_REPLACE_TITLE', qnRaw.title);

  fs.writeFileSync(markdownPath, newMarkdownFile + '\n');
}

async function syncQuestionList() {
  const qnsList = Object.keys(qnsDict);

  await Promise.all(qnsList.map((qnSlug) => syncQuestion(qnSlug)));
}

void syncQuestionList();
