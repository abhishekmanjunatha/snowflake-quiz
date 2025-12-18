import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_FILE = path.join(__dirname, '../resources/snowpro-questions.md');
const OUTPUT_FILE = path.join(__dirname, '../src/data/quiz-data.json');

function parseMarkdown() {
  try {
    const content = fs.readFileSync(INPUT_FILE, 'utf-8');
    const lines = content.split('\n');

    const domains = [];
    let currentDomain = null;
    let currentSubTopic = null;
    let currentQuestion = null;
    let currentScenario = null;

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      if (!line) continue;

      // Domain Match
      const domainMatch = line.match(/^## \*\*Domain ([\d\.]+): (.*) \(Weightage: (.*)\)\*\*/);
      if (domainMatch) {
        currentDomain = {
          id: domainMatch[1],
          title: domainMatch[2].trim(),
          weightage: domainMatch[3].trim(),
          scenario: null,
          subTopics: []
        };
        domains.push(currentDomain);
        currentSubTopic = null;
        currentScenario = null;
        continue;
      }

      // Scenario Title Match
      const scenarioTitleMatch = line.match(/^### \*\*🏢 Business Scenario: (.*)\*\*/);
      if (scenarioTitleMatch && currentDomain) {
        currentScenario = {
          title: scenarioTitleMatch[1].trim(),
          description: ""
        };
        currentDomain.scenario = currentScenario;
        continue;
      }

      // Scenario Description Match (Italicized text right after scenario title usually)
      if (currentScenario && line.startsWith('*') && line.endsWith('*') && !line.includes('Answer:')) {
         // Remove start and end asterisks
         currentScenario.description = line.replace(/^\*|\*$/g, '').trim();
         continue;
      }

      // Sub-topic Match
      const subTopicMatch = line.match(/^### \*\*🔹 Sub-topic ([\d\.]+): (.*)\*\*/);
      if (subTopicMatch && currentDomain) {
        currentSubTopic = {
          id: subTopicMatch[1],
          title: subTopicMatch[2].trim(),
          questions: []
        };
        currentDomain.subTopics.push(currentSubTopic);
        continue;
      }

      // Question Match
      const questionMatch = line.match(/^(\d+)\. \*\*(.*)\*\*/);
      if (questionMatch && currentSubTopic) {
        currentQuestion = {
          id: parseInt(questionMatch[1]),
          text: questionMatch[2].trim(),
          options: [],
          correctAnswer: null,
          explanation: null
        };
        currentSubTopic.questions.push(currentQuestion);
        continue;
      }

      // Option Match
      const optionMatch = line.match(/^\*\s*([A-D])\.\s*(.*)/);
      if (optionMatch && currentQuestion) {
        currentQuestion.options.push({
          label: optionMatch[1],
          text: optionMatch[2].trim()
        });
        continue;
      }

      // Answer Match
      const answerMatch = line.match(/^\*\s*\*\*Answer:\s*([A-D])\.\*\*\s*(.*)/);
      if (answerMatch && currentQuestion) {
        currentQuestion.correctAnswer = answerMatch[1];
        currentQuestion.explanation = answerMatch[2].trim();
        continue;
      }
    }

    const output = {
      title: "SnowPro Core (COF-C02) Practice & Scenarios",
      domains: domains
    };

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output, null, 2));
    console.log(`Successfully parsed ${domains.length} domains to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('Error parsing markdown:', error);
  }
}

parseMarkdown();
