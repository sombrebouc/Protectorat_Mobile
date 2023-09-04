export interface Character {
    id: number,
    playerPortrait: string
    playerLastname: string
    playerFirstname: string
    playerGameXps: number,
    charatLastname: string
    charactFirstname: string
    charactHistory: string
    charactCountry: string
    charactAge: number,
    charactStatus: string
    charactTotem: string
    charactEthny: string
    charactRace: string
    charactEpicTales: string
    charactOrigins: string
    charcatFaction: string
}

export class CharactersList{
    private list: Array<Character>
    public constructor(data: Array<Character>){
        this.list = data
    }

    public getCharacters(): Array<Character>{
        return this.list
    }

    public getCharacterById(id:number) : Character{
        let charactList: Array<Character> = this.list.filter((x) => x.id === id)
        return charactList[0]
    }
}