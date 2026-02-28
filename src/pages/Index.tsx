import { useState } from "react";
import {
  Download,
  Shield,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Gamepad2,
  Swords,
  ScrollText,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация в стиле Discord */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">FOLOZOWGRAM</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Rich Presence для RolePlay в Discord</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Icon name="Globe" size={16} />
              <span className="ml-2">Сообщество</span>
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Подключиться
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Icon name="Globe" size={16} />
                <span className="ml-2">Сообщество</span>
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Подключиться
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["⚔️", "🗺️", "🏰", "🎭"].map((emoji, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] text-lg"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">Сервер FOLOZOWGRAM</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Текстовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["общий", "новости", "ролевые-истории", "помощь"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Голосовые каналы</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Таверна", "Боевой лагерь"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">⚔️</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Искатель</div>
                <div className="text-[#b9bbbe] text-xs truncate">#7777</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">ролевые-истории</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Покажи своим друзьям кем ты играешь прямо в Discord</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Приветственное сообщение */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">FOLOZOWGRAM Бот</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в FOLOZOWGRAM!</strong> Показывай свой RP-персонаж и статус игры прямо в Discord.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет FOLOZOWGRAM:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>⚔️ Показывает имя и класс твоего персонажа</li>
                        <li>🗺️ Отображает локацию и сюжетную арку</li>
                        <li>🎭 Обновляет статус в реальном времени</li>
                        <li>🏰 Работает с любой RP-игрой</li>
                        <li>🔒 Никакого сбора данных — только твой персонаж</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение пользователя с Rich Presence */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">К</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Кираэль</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Только начала новую сюжетную арку в Серебряном лесу! 🌿
                  </div>

                  {/* Демо Rich Presence */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    {/* Заголовок профиля */}
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#5865f2] to-[#7c3aed] relative">
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#36393f] overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2f3136] rounded-full flex items-center justify-center">
                              <span className="text-lg sm:text-2xl">🧝</span>
                            </div>
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs px-2 sm:px-3 py-1 rounded"
                      >
                        <Settings className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">Профиль</span>
                      </Button>
                    </div>

                    {/* Информация профиля */}
                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Кираэль</h3>
                        <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                          <span>kiraell_rp</span>
                          <span>-</span>
                          <span>Эльф-охотник</span>
                          <div className="flex gap-1 ml-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#5865f2] rounded-sm"></div>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#3ba55c] rounded-sm"></div>
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#faa61a] rounded-sm"></div>
                          </div>
                        </div>
                      </div>

                      {/* Статусное сообщение */}
                      <div className="mb-3 sm:mb-4">
                        <div className="bg-[#36393f] rounded-lg p-2 sm:p-3 relative">
                          <div className="absolute -top-2 left-3 sm:left-4 w-4 h-4 bg-[#36393f] rotate-45"></div>
                          <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#5865f2] rounded-full flex items-center justify-center">
                              <span className="text-xs">⚔️</span>
                            </div>
                            <span>Выслеживаю дракона...</span>
                          </div>
                        </div>
                      </div>

                      {/* Вкладки */}
                      <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Персонаж
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                          Активность
                        </button>
                      </div>

                      {/* Активность FOLOZOWGRAM */}
                      <div>
                        <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <span>🎭 Играет в RP</span>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                          {/* Логотип игры */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#5865f2] to-[#7c3aed] rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                            ⚔️
                          </div>

                          {/* Детали активности */}
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">FOLOZOWGRAM</div>
                            <div className="text-[#dcddde] text-xs sm:text-sm mb-1">Кираэль — Эльф-охотник</div>
                            <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">🗺️ Серебряный лес, Гл. 3</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">В игре • 1:23 прошло</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Еще одно сообщение пользователя */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">Д</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Данияр_Страж</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:08</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    FOLOZOWGRAM — лучшая штука для нашего RP-сервера! Теперь всегда видно кто и где играет 🏰
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Swords className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />
                  Начни приключение с FOLOZOWGRAM
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                      🎭
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Создай персонажа</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Настрой имя, класс и описание своего RP-героя</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                      🔗
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Подключи Discord</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Безопасная авторизация — один клик</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                      ⚔️
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Играй и показывай</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Статус автоматически обновляется во время игры</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <Gamepad2 className="w-4 h-4 mr-2" />
                    Начать бесплатно
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <ScrollText className="w-4 h-4 mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>

              {/* Преимущества */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему FOLOZOWGRAM?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Мгновенный статус",
                      desc: "Друзья видят твоего персонажа в реальном времени",
                    },
                    {
                      icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Богатые детали",
                      desc: "Класс, локация, сюжетная арка — всё на виду",
                    },
                    {
                      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Обновление в реальном времени",
                      desc: "Статус меняется вместе с игрой автоматически",
                    },
                    {
                      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                      title: "Полная приватность",
                      desc: "Показываешь только то, что хочешь",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">{feature.icon}</div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-[#72767d] text-xs sm:text-sm">Сообщение #ролевые-истории</div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В игре — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Кираэль",
                    status: "🗺️ Серебряный лес",
                    avatar: "🧝",
                    color: "from-purple-500 to-pink-500",
                  },
                  { name: "Данияр_Страж", status: "🏰 Цитадель Грома", avatar: "🛡️", color: "from-green-500 to-blue-500" },
                  { name: "Маэстро_Огня", status: "⚔️ Арена битв", avatar: "🔥", color: "from-orange-500 to-red-500" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative text-sm`}
                    >
                      {user.avatar}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Не в сети */}
            <div>
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Не в сети — 2</h3>
              <div className="space-y-2">
                {[
                  { name: "Серебряный_Клинок", avatar: "🗡️", color: "from-gray-500 to-gray-600" },
                  { name: "Леди_Тьмы", avatar: "🌙", color: "from-indigo-500 to-purple-600" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer opacity-50">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative text-sm`}
                    >
                      {user.avatar}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#747f8d] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[#8e9297] text-sm font-medium truncate">{user.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
