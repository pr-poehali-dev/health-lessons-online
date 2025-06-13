import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface LessonCardProps {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  imageUrl: string;
  difficulty: "Начальный" | "Средний" | "Продвинутый";
  onStart: () => void;
}

const LessonCard = ({
  id,
  title,
  description,
  duration,
  category,
  imageUrl,
  difficulty,
  onStart,
}: LessonCardProps) => {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "Начальный":
        return "bg-green-100 text-green-800";
      case "Средний":
        return "bg-yellow-100 text-yellow-800";
      case "Продвинутый":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 group">
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Badge
          className={`absolute top-3 right-3 ${getDifficultyColor(difficulty)}`}
        >
          {difficulty}
        </Badge>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          <div className="flex items-center text-sm text-gray-500">
            <Icon name="Clock" className="w-4 h-4 mr-1" />
            {duration}
          </div>
        </div>
        <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Button onClick={onStart} className="w-full">
          Начать урок
          <Icon name="Play" className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default LessonCard;
