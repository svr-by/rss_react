import { IGamesInfo } from 'shared/types';

export function generateGamesStats(stats: IGamesInfo | undefined) {
  const result: string[] = [];
  if (stats) {
    if (stats.audioCall.right || stats.audioCall.wrong) {
      result.push(`Аудиовызов: ${stats.audioCall.right}|${stats.audioCall.wrong}`);
    }
    if (stats.sprint.right || stats.sprint.wrong) {
      result.push(`Спринт: ${stats.sprint.right}|${stats.sprint.wrong}`);
    }
  }
  return result.join(', ');
}

export function generateDifficultyLabel(wordDifficulty: string | undefined) {
  if (wordDifficulty !== 'easy') {
    return `label label--${wordDifficulty}`;
  }
}

export function generateButtonName(wordDifficulty: string | undefined, difficulty: string) {
  return wordDifficulty === difficulty ? `Remove from ${difficulty}` : `Add to ${difficulty}`;
}

export function generateClassName(fullView?: boolean, className?: string) {
  let agrClass = 'card';
  agrClass = className ? `${agrClass} ${className}` : agrClass;
  agrClass = fullView ? `${agrClass} card--full` : agrClass;
  return agrClass;
}
