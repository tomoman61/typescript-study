export { };

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
}
type PartialType = Partial<Profile>;
type RiquiredType = Required<Profile>;

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga';

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_case: number;
}

type Covid19 = Record<Prefectures, Covid19InfectionInfo>

const covid19Japan: Covid19 = {
  Tokyo: { kanji_name: "東京", confirmed_case: 2200 },
  Chiba: { kanji_name: "千葉", confirmed_case: 200 },
  Tottori: { kanji_name: "鳥取", confirmed_case: 22 },
  Shiga: { kanji_name: "滋賀", confirmed_case: 12 },
}