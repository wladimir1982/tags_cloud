export interface Tag {
  id: string;
  label: string;
  volume?: number;
  type?: string;
  sentiment: {
    negative?: number;
    neutral?: number;
    positive?: number;
  };
  sentimentScore: number;
  burst?: number;
  days?: string;
  pageType: object;
  queries: any;
}
