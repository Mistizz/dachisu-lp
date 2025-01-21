import { Button } from "@/components/ui/button"
import { Instagram, Facebook, Twitter, MapPin, Menu } from "lucide-react"
import logo from "@/assets/images/logo.webp"
import mainVisual from "@/assets/images/01.webp"
import keyVisual from "@/assets/images/keyvisual.webp"
import product1 from "@/assets/images/02_1.webp"
import product2 from "@/assets/images/02_2.webp"
import product3 from "@/assets/images/02_3.webp"
import gallery1 from "@/assets/images/03_1.webp"
import gallery2 from "@/assets/images/03_2.webp"
import gallery3 from "@/assets/images/03_3.webp"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFAF0]">
      {/* ヘッダー */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="ダー・チースーのロゴ"
                className="w-auto h-8"
              />
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
                ダー・チースーとは
              </a>
              <a href="#products" className="text-gray-700 hover:text-green-600 transition-colors">
                特産品紹介
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors">
                ギャラリー
              </a>
              <a href="#access" className="text-gray-700 hover:text-green-600 transition-colors">
                アクセス
              </a>
            </nav>
            <Button variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* ヒーローセクション */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-yellow-50">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={mainVisual}
              alt="背景画像"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
          </div>
          <div className="container relative mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                徳島の魅力を伝える
                <br />
                ゆるキャラ、
                <br />
                <span className="text-green-400">ダー・チースー！</span>
              </h1>
              <p className="text-lg text-white drop-shadow-lg">
                すだちの爽やかさとチーズのまろやかさが
                <br />
                出会った、徳島生まれのゆるキャラです
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 relative z-10">
              <img
                src={mainVisual}
                alt="ダー・チースーのメインビジュアル"
                className="w-full h-auto max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* プロフィールセクション */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ダー・チースーのプロフィール</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <img
                  src={keyVisual}
                  alt="ダー・チースーの全身イラスト"
                  className="w-full h-auto max-w-md mx-auto"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  ダー・チースーは徳島県の特産品である「すだち」と「チーズ」を組み合わせたキャラクターです。すだちの爽やかな酸味とチーズのまろやかさを表現し、徳島の魅力を全国に発信しています。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-bold text-green-700 mb-2">誕生日</h3>
                    <p>8月1日</p>
                  </div>
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h3 className="font-bold text-yellow-700 mb-2">好きな食べ物</h3>
                    <p>すだち入りチーズケーキ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特産品セクション */}
        <section id="products" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">徳島の恵み</h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              徳島県は、全国生産量の9割以上を占める「すだち」や、甘くて美味しい「なると金時」など、多くの特産品があります。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img
                  src={product1}
                  alt="特産品1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">徳島の食文化</h3>
                  <p className="text-gray-600">新鮮な食材と伝統的な調理法が織りなす徳島の味</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img
                  src={product2}
                  alt="特産品2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">郷土料理</h3>
                  <p className="text-gray-600">代々受け継がれる徳島の伝統的な味わい</p>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <img
                  src={product3}
                  alt="特産品3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">屋台グルメ</h3>
                  <p className="text-gray-600">活気あふれる市場で味わう徳島の美味</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ギャラリーセクション */}
        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ダー・チースーの活動写真</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative group">
                <img
                  src={gallery1}
                  alt="イベント参加"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg font-bold">イベント参加</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src={gallery2}
                  alt="地域交流"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg font-bold">地域交流</p>
                </div>
              </div>
              <div className="relative group">
                <img
                  src={gallery3}
                  alt="プロモーション活動"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <p className="text-white text-lg font-bold">プロモーション活動</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* アクセスセクション */}
        <section id="access" className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">ダー・チースーに会いに行こう！</h2>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="text-gray-700">
                ダー・チースーは徳島県内のさまざまなイベントに参加しています。最新の出演情報は公式SNSでチェックしてください。
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  イベント情報
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <img
                src={logo}
                alt="ダー・チースーのロゴ"
                className="w-auto h-8 mx-auto md:mx-0 mb-4"
              />
              <p className="text-sm text-gray-400">© 2025 ダー・チースー公式サイト</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold mb-4">リンク</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    利用規約
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-bold mb-4">SNS</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

