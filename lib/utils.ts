import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Character replacement mappings for creating messy text
const REPLACEMENTS: Record<string, string[]> = {
  'a': ['あ', 'ア', 'α', 'ａ', 'à', 'á'],
  'e': ['え', 'エ', 'ε', 'ｅ', 'è', 'é'],
  'i': ['い', 'イ', 'ι', 'ｉ', 'ì', 'í'],
  'o': ['お', 'オ', 'ο', 'ｏ', 'ò', 'ó'],
  'u': ['う', 'ウ', 'υ', 'ｕ', 'ù', 'ú'],
  'n': ['ん', 'ン', 'η', 'ｎ', 'ñ'],
  'k': ['か', 'カ', 'κ', 'ｋ'],
  's': ['さ', 'サ', 'σ', 'ｓ'],
  't': ['た', 'タ', 'τ', 'ｔ'],
  'h': ['は', 'ハ', 'η', 'ｈ'],
  'm': ['ま', 'マ', 'μ', 'ｍ'],
  'r': ['ら', 'ラ', 'ρ', 'ｒ'],
  'w': ['わ', 'ワ', 'ω', 'ｗ'],
  'y': ['や', 'ヤ', 'γ', 'ｙ'],
};

// Hiragana/Katakana replacement with random similar characters
const JAPANESE_REPLACEMENTS: Record<string, string[]> = {
  'あ': ['ア', 'a', 'α', 'ａ'],
  'い': ['イ', 'i', 'ι', 'ｉ'],
  'う': ['ウ', 'u', 'υ', 'ｕ'],
  'え': ['エ', 'e', 'ε', 'ｅ'],
  'お': ['オ', 'o', 'ο', 'ｏ'],
  'か': ['カ', 'k', 'κ', 'ｋ'],
  'き': ['キ', 'ki', 'ｋｉ'],
  'く': ['ク', 'ku', 'ｋｕ'],
  'け': ['ケ', 'ke', 'ｋｅ'],
  'こ': ['コ', 'ko', 'ｋｏ'],
  'さ': ['サ', 's', 'σ', 'ｓ'],
  'し': ['シ', 'shi', 'ｓｈｉ'],
  'す': ['ス', 'su', 'ｓｕ'],
  'せ': ['セ', 'se', 'ｓｅ'],
  'そ': ['ソ', 'so', 'ｓｏ'],
  'た': ['タ', 't', 'τ', 'ｔ'],
  'ち': ['チ', 'chi', 'ｃｈｉ'],
  'つ': ['ツ', 'tsu', 'ｔｓｕ'],
  'て': ['テ', 'te', 'ｔｅ'],
  'と': ['ト', 'to', 'ｔｏ'],
  'な': ['ナ', 'na', 'ｎａ'],
  'に': ['ニ', 'ni', 'ｎｉ'],
  'ぬ': ['ヌ', 'nu', 'ｎｕ'],
  'ね': ['ネ', 'ne', 'ｎｅ'],
  'の': ['ノ', 'no', 'ｎｏ'],
  'は': ['ハ', 'h', 'η', 'ｈ'],
  'ひ': ['ヒ', 'hi', 'ｈｉ'],
  'ふ': ['フ', 'fu', 'ｆｕ'],
  'へ': ['ヘ', 'he', 'ｈｅ'],
  'ほ': ['ホ', 'ho', 'ｈｏ'],
  'ま': ['マ', 'm', 'μ', 'ｍ'],
  'み': ['ミ', 'mi', 'ｍｉ'],
  'む': ['ム', 'mu', 'ｍｕ'],
  'め': ['メ', 'me', 'ｍｅ'],
  'も': ['モ', 'mo', 'ｍｏ'],
  'や': ['ヤ', 'y', 'γ', 'ｙ'],
  'ゆ': ['ユ', 'yu', 'ｙｕ'],
  'よ': ['ヨ', 'yo', 'ｙｏ'],
  'ら': ['ラ', 'r', 'ρ', 'ｒ'],
  'り': ['リ', 'ri', 'ｒｉ'],
  'る': ['ル', 'ru', 'ｒｕ'],
  'れ': ['レ', 're', 'ｒｅ'],
  'ろ': ['ロ', 'ro', 'ｒｏ'],
  'わ': ['ワ', 'w', 'ω', 'ｗ'],
  'を': ['ヲ', 'wo', 'ｗｏ'],
  'ん': ['ン', 'n', 'η', 'ｎ'],
};

/**
 * Scrambles text by replacing characters with random similar-looking characters
 * Used for testing layouts without revealing actual content
 */
export function scrambleText(text: string): string {
  if (!text) return text;
  
  const isTestMode = process.env.NEXT_PUBLIC_TEST_MODE === 'true';
  if (!isTestMode) return text;

  return text.split('').map(char => {
    const lower = char.toLowerCase();
    
    // Check for English character replacements
    if (REPLACEMENTS[lower] && Math.random() > 0.5) {
      const options = REPLACEMENTS[lower];
      return Math.random() > 0.5 ? 
        options[Math.floor(Math.random() * options.length)] : 
        char;
    }
    
    // Check for Japanese character replacements
    if (JAPANESE_REPLACEMENTS[char] && Math.random() > 0.5) {
      const options = JAPANESE_REPLACEMENTS[char];
      return options[Math.floor(Math.random() * options.length)];
    }
    
    // Randomly uppercase/lowercase
    if (Math.random() > 0.7) {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }
    
    return char;
  }).join('');
}
