import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import LessonCard from "@/components/LessonCard";
import Icon from "@/components/ui/icon";

const Lessons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const lessons = [
    {
      id: "1",
      title: "Основы здорового питания",
      description:
        "Изучи принципы сбалансированного питания и узнай, какие продукты дают энергию",
      duration: "15 мин",
      category: "Питание",
      imageUrl:
        "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=250&fit=crop",
      difficulty: "Начальный" as const,
    },
    {
      id: "2",
      title: "Утренняя зарядка для подростков",
      description:
        "Простые упражнения, которые помогут проснуться и зарядиться энергией",
      duration: "20 мин",
      category: "Физическая активность",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      difficulty: "Начальный" as const,
    },
    {
      id: "3",
      title: "Управление стрессом в школе",
      description:
        "Техники релаксации и управления эмоциями в стрессовых ситуациях",
      duration: "25 мин",
      category: "Ментальное здоровье",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      difficulty: "Средний" as const,
    },
    {
      id: "4",
      title: "Здоровый сон: правила и привычки",
      description:
        "Как наладить режим сна и создать комфортную атмосферу для отдыха",
      duration: "18 мин",
      category: "Гигиена и сон",
      imageUrl:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&h=250&fit=crop",
      difficulty: "Начальный" as const,
    },
    {
      id: "5",
      title: "Витамины и минералы для роста",
      description:
        "Узнай, какие питательные вещества особенно важны в подростковом возрасте",
      duration: "22 мин",
      category: "Питание",
      imageUrl:
        "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&h=250&fit=crop",
      difficulty: "Средний" as const,
    },
    {
      id: "6",
      title: "Командные виды спорта",
      description:
        "Преимущества командных игр для физического и социального развития",
      duration: "30 мин",
      category: "Физическая активность",
      imageUrl:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=250&fit=crop",
      difficulty: "Средний" as const,
    },
  ];

  const filteredLessons = lessons.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || lesson.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleStartLesson = (id: string) => {
    // В будущем навигация на страницу урока
    console.log("Starting lesson:", id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Каталог уроков
          </h1>
          <p className="text-lg text-gray-600">
            Выбери урок и начни изучать основы здорового образа жизни
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
              />
              <Input
                placeholder="Поиск уроков..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <div className="md:w-64">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="Питание">Питание</SelectItem>
                <SelectItem value="Физическая активность">
                  Физическая активность
                </SelectItem>
                <SelectItem value="Ментальное здоровье">
                  Ментальное здоровье
                </SelectItem>
                <SelectItem value="Гигиена и сон">Гигиена и сон</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Найдено уроков:{" "}
            <span className="font-semibold">{filteredLessons.length}</span>
          </p>
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLessons.map((lesson) => (
            <LessonCard
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              description={lesson.description}
              duration={lesson.duration}
              category={lesson.category}
              imageUrl={lesson.imageUrl}
              difficulty={lesson.difficulty}
              onStart={() => handleStartLesson(lesson.id)}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredLessons.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="BookOpen"
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
            />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Уроки не найдены
            </h3>
            <p className="text-gray-600 mb-4">
              Попробуйте изменить параметры поиска
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
