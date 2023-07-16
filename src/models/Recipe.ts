interface Recipe {
  author: string;
  budget: number;
  description: string;
  difficulty: number;
  images: string[];
  ingredients: string[];
  name: string;
  people: number;
  prepTime: number;
  rate: number;
  steps: string[];
  tags: string[];
  totalTime: number;
  url: string;
}

export default Recipe;
