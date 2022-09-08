export interface ICardProps {
  id: string
  title: string;
  value: string;
  location: string;
  imageUrl: string;
  isFullShipping: boolean;
  onClick(): void
}
