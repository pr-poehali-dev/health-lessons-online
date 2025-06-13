import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface SuccessStoryProps {
  name: string;
  age: number;
  photo: string;
  achievement: string;
  quote: string;
  category: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

const SuccessStory = ({
  name,
  age,
  photo,
  achievement,
  quote,
  category,
  beforeAfter,
}: SuccessStoryProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "fitness":
        return "Dumbbell";
      case "nutrition":
        return "Apple";
      case "mental":
        return "Brain";
      case "lifestyle":
        return "Star";
      default:
        return "Heart";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fitness":
        return "text-blue-600 bg-blue-100";
      case "nutrition":
        return "text-green-600 bg-green-100";
      case "mental":
        return "text-purple-600 bg-purple-100";
      case "lifestyle":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-pink-600 bg-pink-100";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={photo}
            alt={`${name} - история успеха`}
            className="w-full h-64 object-cover"
          />
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full ${getCategoryColor(category)} flex items-center space-x-1`}
          >
            <Icon name={getCategoryIcon(category)} className="w-4 h-4" />
            <span className="text-sm font-medium">
              {category === "fitness"
                ? "Фитнес"
                : category === "nutrition"
                  ? "Питание"
                  : category === "mental"
                    ? "Психология"
                    : "Образ жизни"}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              {name.charAt(0)}
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900">{name}</h3>
              <p className="text-gray-500">{age} лет</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-purple-600 mb-2">Достижение:</h4>
            <p className="text-gray-700">{achievement}</p>
          </div>

          {beforeAfter && (
            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">Результат:</h4>
              <div className="text-sm text-gray-600">
                <p className="mb-1">
                  <span className="font-medium">Было:</span>{" "}
                  {beforeAfter.before}
                </p>
                <p>
                  <span className="font-medium">Стало:</span>{" "}
                  {beforeAfter.after}
                </p>
              </div>
            </div>
          )}

          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-700">
            "{quote}"
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
};

export default SuccessStory;
