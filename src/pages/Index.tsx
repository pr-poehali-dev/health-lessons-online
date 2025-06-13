import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import HealthTopicCard from "@/components/HealthTopicCard";
import Icon from "@/components/ui/icon";

const Index = () => {
  const healthTopics = [
    {
      title: "Правильное питание",
      description:
        "Узнай, как питаться сбалансированно и поддерживать энергию весь день",
      iconName: "Apple",
      lessonsCount: 8,
      bgColor: "bg-green-500",
      category: "nutrition",
    },
    {
      title: "Физическая активность",
      description: "Найди свой вид спорта и научись заботиться о своем теле",
      iconName: "Dumbbell",
      lessonsCount: 12,
      bgColor: "bg-blue-500",
      category: "fitness",
    },
    {
      title: "Ментальное здоровье",
      description: "Управляй стрессом, развивай эмоциональный интеллект",
      iconName: "Brain",
      lessonsCount: 10,
      bgColor: "bg-purple-500",
      category: "mental",
    },
    {
      title: "Гигиена и сон",
      description:
        "Создай здоровые привычки для красоты и хорошего самочувствия",
      iconName: "Moon",
      lessonsCount: 6,
      bgColor: "bg-indigo-500",
      category: "hygiene",
    },
  ];

  const handleTopicClick = (category: string) => {
    // В будущем можно добавить навигацию с фильтром по категории
    window.location.href = "/lessons";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Два крыла успеха: Тело и разум
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Гармоничное развитие физического и ментального здоровья через
            интерактивные уроки для подростков
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              <Link to="/lessons">
                Начать обучение
                <Icon name="ArrowRight" className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-purple-600"
            >
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Health Topics Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Основные темы здоровья
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Изучай каждую тему в своем темпе с помощью наших интерактивных
              уроков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthTopics.map((topic, index) => (
              <HealthTopicCard
                key={index}
                title={topic.title}
                description={topic.description}
                iconName={topic.iconName}
                lessonsCount={topic.lessonsCount}
                bgColor={topic.bgColor}
                onClick={() => handleTopicClick(topic.category)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">36+</div>
              <div className="text-gray-600">Интерактивных уроков</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Основные темы</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Бесплатно</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
