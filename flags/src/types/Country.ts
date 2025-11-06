
    export interface Country {
  flags: Flags,
  name: Name,
  tld: string[],
  currencies: Currencies,
  capital: string[],
  region: string,
  subregion: string,
  languages: Languages,
  borders: string[],
  population: number,
  cca3:string
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  [nameCode:string]:{
     official: string
  common: string

  }
}


export interface Currencies {
  [currencyCode:string] : {
      name: string
  symbol: string

  }
}




export interface Languages {
  [lanuageCode:string]:string
}

