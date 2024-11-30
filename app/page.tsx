import { FeatureCard } from "@/components/FeatureCard";
import {
  Wifi,
  Gamepad2,
  Speaker,
  VolumeOff,
  TramFront,
  WashingMachine,
  Car,
  Martini,
  MonitorPlay,
  Cigarette,
  CookingPot,
  HeartPulse,
  CheckCircle,
} from "lucide-react";
import { Section } from "@/components/Section";

const features = [
  {
    icon: Wifi,
    title: "高速インターネット",
    description:
      "2Gbpsの高速インターネット回線を利用できます。Wifi APは2個用意しています。要望があれば部屋に有線を敷きます。",
  },
  {
    icon: Gamepad2,
    title: "ゲーム機完備",
    description:
      "PlayStation 5 Pro、PSVR2、Xbox Series X、Nintendo Switch(有機ELモデル)を用意しています。",
  },
  {
    icon: Speaker,
    title: "ホームシネマ設備",
    description:
      "DENON製最高級AVアンプ、DENON製高級プリメインアンプ、YAMAHA製スピーカーによって構築されているサラウンドシステム、Sony BRAVIA 65インチテレビ設備のある音響部屋があります。",
  },
  {
    icon: MonitorPlay,
    title: "豊富なコンテンツ",
    description:
      "Netflixをはじめとした各種動画配信サービス、DAZNなどのライブ配信サービス、Apple Musicを利用できます（音響室のApple TVにて）。また、Xbox Game Pass Ultimate、PlayStation Plus Premiumも利用可能です。",
  },
  {
    icon: VolumeOff,
    title: "静かな環境",
    description:
      "道路から離れた住宅地に位置しており、静かな環境で快適に過ごせます。昼夜問わず、騒音が気になることは全くありません。リモートワークに最適です。",
  },
  {
    icon: TramFront,
    title: "交通アクセス",
    description:
      "最寄りの小山駅から徒歩8分、東京駅まで最短43分（新幹線）。都内通勤にも便利です。駅の自転車置場も格安。",
  },
  {
    icon: WashingMachine,
    title: "洗濯乾燥機あり",
    description:
      "乾燥機能付きのいい感じの洗濯乾燥機があります。洗濯物を入れておけば、自動で洗濯から乾燥まで行ってくれます。",
  },
  {
    icon: CookingPot,
    title: "料理好き歓迎",
    description:
      "キッチンには冷蔵庫、電子レンジ、全自動食洗機、コンロ、ハンドブレンダー、低温調理器、圧力鍋など揃っています。また、スパイス、ハーブ類も常時豊富に揃えています。",
  },
  {
    icon: Car,
    title: "モータースポーツイベント",
    description:
      "Formula 1、WEC、Formula Eなどの開催時はちょっとしたパーティーを開きます。モータースポーツ好きな方はぜひご参加ください。",
  },
  {
    icon: Martini,
    title: "お酒！お酒！",
    description:
      "リキュール、スピリッツ類を常時15本以上、ウイスキーも15本以上常備しています（有料）。中にはレアボトルも。カクテルを作る道具も揃っています。",
  },
  {
    icon: Cigarette,
    title: "喫煙者歓迎",
    description:
      "屋外になりますが、喫煙可能です。（オーナーの部屋は喫煙できますが、他の部屋は禁煙です）",
  },
  {
    icon: HeartPulse,
    title: "災害対策",
    description:
      "水を常時40リットル備蓄しています。また、この地域は落雷、洪水、地震、台風の影響がかなり少なく、安全です(当社比)。",
  },
];

const amenities = [
  "ドラム式洗濯乾燥機",
  "食器洗浄乾燥機",
  "電子レンジ",
  "冷蔵庫・冷凍庫",
  "天然水サーバー",
  "SodaStream",
  "Dysonのすごい掃除機",
  "モノクロ複合機（プリンター、スキャナー、コピー機）",
  "DENON製AVアンプ",
  "DENON製プリメインアンプ",
  "YAMAHA製ハイレゾスピーカー",
  "Sony BRAVIA 4Kテレビ",
  "Xbox Series X",
  "PlayStation 5(ディスクドライブ搭載モデル)",
  "PlayStation 5 Pro",
  "Nintendo Switch",
  "Apple TV 4K",
];

const facilities = [
  "ユニットバス",
  "洗面台",
  "トイレ（2個）",
  "キッチン",
  "リビング",
  "音響室",
  "庭",
];

export default function Home() {
  return (
    <main className="p-8 font-[family-name:var(--font-geist-sans)]">
      <Section>
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            ギークハウス小山
          </h1>
          <p className="text-lg text-muted-foreground">
            栃木県小山市に新設のシェアハウスです。2025年1月開設。
            <br />
            築10年ぐらいの一軒家（何LDKかは忘れた）、庭付き、猫付き。
          </p>
        </div>
      </Section>
      <Section>
        <h2 className="pb-4 text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          概要
        </h2>
        <p className="text-lg text-muted-foreground">
          栃木県小山市に新設する一軒家のシェアハウスです。
          <br />
          生活に必要なものからそうじゃないものまでやたらといろいろ揃っているので、いきなり居住してすべての体験を得られます。
          <br />
          ゲーマーのから音響オタク、ギークなどなんでもござれなオーナーがなんかやってます。
          <br />
          よろしくどうぞ。
        </p>
      </Section>
      <Section>
        <h2 className="pb-4 text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          特徴
        </h2>
        <div className="flex flex-wrap gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Section>
      <Section>
        <h2 className="pb-4 text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          設備
        </h2>
        <div>
          <h3 className="text-lg font-semibold text-foreground">設備</h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {facilities.map((amenity, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">共有備品</h3>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="pb-4 text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          入居要件
        </h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground">必須要件</h3>
          <ul className="list-disc pl-4">
            <li>コミュニケーション能力があること</li>
            <li>DQNではない</li>
            <li>共同生活ができること</li>
            <li>マナーを守れること</li>
            <li>他人に敬意を払えること</li>
            <li>共有スペースをきれいに使えること</li>
            <li>家賃を滞納せずに払えること</li>
            <li>悪臭対策ができること</li>
            <li>精神的問題を抱えてないか、あるいは治療中であること</li>
            <li>宗教勧誘、ネットワークビジネスお断り</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <h3 className="text-lg font-semibold text-foreground">歓迎要件</h3>
          <ul className="list-disc pl-4">
            <li>ものづくりが好き</li>
            <li>何かを作る、描く、書くことが好きなこと</li>
            <li>モータースポーツ好きなこと</li>
            <li>お酒が好きなこと(20歳未満には飲ませないこと)</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-foreground">
            入居にあたって
          </h3>
          <p>
            <strong>入居にはarclispによる審査が必要です。</strong>
            審査には入居希望者の身元確認の確認が必要です。また、Twitter(X)、BlueskyなどのSNSのアカウントを確認します。
            <br />
            審査はわりと厳しめに行う予定です（たくさんの反省がここに込められている）が、基本的に人としてちゃんとしていれば、問題ないと思います。
            <br />
            また、入居には保証金（デポジット）が必要です。保証金は家賃の1ヶ月分です。退去時に家賃滞納がなく、汚損もない場合は全額返金します。
            <br />
            未成年の入居可も考えていますが、その際は内覧ないし契約時に保護者の同伴および同意が必要です。
            <br />
            <strong>
              問題行動等が確認された場合、即時退去していただく場合があります。
            </strong>
          </p>
          <div className="mt-4"></div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-foreground">
            細かい規定や補足
          </h3>
          <ul className="list-disc pl-4">
            <li>
              エアコンを除く、大電力を消費する機器の使用は事前にご相談ください。3Dプリンタ、ハイエンドPC（PSUが800W以上のもの）などが対象です。
              <br />
              また、電気代の負担をお願いする場合があります。
            </li>
            <li>
              物理サーバーの運用は許可制、かつ個室契約の方のみです。共用部、シェア部屋の設置は騒音の関係で許可できません。また、ノートパソコンのサーバー運用は一律で禁止です。
              <br />
              許可される物理サーバーの形式は、最初からサーバーとして設計されたもの、冷却性能が高い、あるいは高くしたデスクトップPC、Raspberry
              Piなどです。
              <br />
              サーバー運用には、電気代の負担をお願いする場合があります。
            </li>
            <li>
              電気ヒーターの利用は禁止です。また、同様に火災の危険性が高い機器の使用は禁止です。
            </li>
            <li>
              強い衝撃を与えてしまったリチウムイオンバッテリー、または劣化が進んだリチウムイオンバッテリーの利用は禁止です。近所に回収してくれるところがあります。
            </li>
            <li>
              NHKにお金を払ってない上に、アンテナが壊れて地上波放送の受信ができません。BS/CS放送も受信できません。
            </li>
            <li>音響室の利用は予約優先です。</li>
            <li>
              ベランダのある部屋に住まわれる場合、洗濯物の乾燥、布団干しなどにご協力いただきます。
            </li>
            <li>
              部外者の立ち入り、パーティー開催は事前に許可が必要です。また、パーティー開催時は住民への配慮をお願いします。
              <br />
              また、部外者の宿泊も事前に許可が必要です。宿泊料金は別途かかります。
            </li>
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="pb-4 text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          費用（暫定）
        </h2>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-foreground">
            家賃（共益費2万円込み）
          </h3>
          <ul className="list-disc pl-4">
            <li>1部屋：¥45,000</li>
            <li>シェア部屋: ¥35,000</li>
            <li>リビング部屋（割引なし、人権あんまりなし）: ¥25,000</li>
          </ul>
          <h3 className="text-lg font-semibold text-foreground">
            共益費の使用用途
          </h3>
          <ul className="list-disc pl-4">
            <li>インターネット代</li>
            <li>水道代</li>
            <li>電気代</li>
            <li>自治会費</li>
            <li>その他設備費</li>
          </ul>
          <h3 className="text-lg font-semibold text-foreground">
            各種割引（重複での割引なし）
          </h3>
          <ul className="list-disc pl-4">
            <li>学生割引：-¥5,000</li>
            <li>ギーク・クリエイター割：-¥5,000</li>
          </ul>
        </div>
      </Section>
      <Section>
        <h2 className="pb-4 text-2xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          お問い合わせ
        </h2>
        <p className="text-lg text-muted-foreground">
          お問い合わせはTwitterのDMで受け付けています。DMはいつでも開いているので、お気軽にどうぞ。
          <br />
          <a
            href="https://twitter.com/arclisp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
          >
            Twitter: @arclisp
          </a>
        </p>
      </Section>
    </main>
  );
}
