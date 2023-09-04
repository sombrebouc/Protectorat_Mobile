import { CharactersList } from "../types/character"
import charactersDatas from "../../src/datas/characters.json"

export class DatasManager {
JSON: any

public get_Characters(): CharactersList{
    return new CharactersList(this.JSON.parse(charactersDatas))
}
}