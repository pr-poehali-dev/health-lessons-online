import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface HealthTopicCardProps {
  title: string;
  description: string;
  iconName: string;
  lessonsCount: number;
  bgColor: string;
  onClick: () => void;
}

const HealthTopicCard = ({
  title,
  description,
  iconName,
  lessonsCount,
  bgColor,
  onClick,
}: HealthTopicCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
      <CardHeader className={`${bgColor} text-white rounded-t-lg`}>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name={iconName} className="w-6 h-6 text-white" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="text-white/80 text-sm">
              {lessonsCount} уроков
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <Button
          onClick={onClick}
          className="w-full group-hover:bg-purple-600 transition-colors"
        >
          Начать изучение
          <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default HealthTopicCard;
