// UTF-8 sanity test: é♂♀

// list of anonymous nicks
// list is [ ["Names"], gender ratio ]
// where ratio == chance of being female, in eights (-1 == no gender)

Speeqe.NAMES = [

[ ["Missingno.", "'M", "hPoké", "けつばん"], -1],
/*
Commenting these out because they break Pokédex sorting, until they can be 
placed at a ragnarok-proofed index (-1 or something)
[ ["Substitute"], -1],
*/
[ ["Bulbasaur", "フシギダネ", "Bisasam", "Bulbizarre", "Bulbizaro"], 1 ],
[ ["Ivysaur", "フシギソウ", "Bisaknosp", "Herbizarre", "Hedezaro"], 1 ],
[ ["Venusaur", "フシギバナ", "Bisaflor", "Florizarre", "Florizaro"], 1 ],
[ ["Charmander", "ヒトカゲ", "Glumanda", "Salameche", "Arlacerto", "CremalacertusCandela"], 1 ],
[ ["Charmeleon", "リザード", "Glutexo", "Reptincel", "Brulacerto", "CremalacertusCorniger"], 1 ],
[ ["Charizard", "リザードン", "Glurak", "Dracaufeu", "Ĉarizaro", "CremalacertusExtraho"], 1 ],
[ ["Squirtle", "ゼニガメ", "Schiggy", "Carapuce", "Testido"], 1 ],
[ ["Wartortle", "カメール", "Schillok", "Carabaffe", "Milittesto"], 1 ],
[ ["Blastoise", "カメックス", "Turtok", "Tortank", "Kamekso"], 1 ],
[ ["Caterpie", "キャタピー", "Raupy", "Chenipan"], 4 ],
[ ["Metapod", "トランセル", "Safcon", "Chrysacier"], 4 ],
[ ["Butterfree", "バタフリー", "Smettbo", "Papilusion"], 4 ],
[ ["Weedle", "ビードル", "Hornliu", "Aspicot"], 4 ],
[ ["Kakuna", "コクーン", "Kokuna", "Coconfort"], 4 ],
[ ["Beedrill", "スピアー", "Bibor", "Dardagnan"], 4 ],
[ ["Pidgey", "ポッポ", "Taubsi", "Roucool"], 4 ],
[ ["Pidgeotto", "ピジョン", "Tauboga", "Roucoups"], 4 ],
[ ["Pidgeot", "ピジョット", "Tauboss", "Roucarnage"], 4 ],
[ ["Rattata", "コラッタ", "Rattfratz", "Rattet"], 4 ],
[ ["Raticate", "ラッタ", "Rattikarl", "Rattatac"], 4 ],
[ ["Spearow", "オニスズメ", "Habitak", "Piafabec"], 4 ],
[ ["Fearow", "オニドリル", "Ibitak", "Rapasdepic"], 4 ],
[ ["Ekans", "アーボ", "Rettan", "Abo"], 4 ],
[ ["Arbok", "アーボック"], 4 ],
[ ["Pikachu", "ピカチュウ"], 4 ],
[ ["Raichu", "ライチュウ"], 4 ],
[ ["Sandshrew", "サンド", "Sandan", "Sabelette"], 4 ],
[ ["Sandslash", "サンドパン", "Sandamer", "Sablaireau"], 4 ],
[ ["Nidoran", "ニドラン", "Nidoranjo", "VenemeumonasterienseLapin"], 8 ],
[ ["Nidorina", "ニドリーナ", "Nidornja", "VenemeumonasterienseTrux"], 8 ],
[ ["Nidoqueen", "ニドクイン", "Nidodamo", "VenemeumonasterienseAtrox"], 8 ],
[ ["Nidoran", "ニドラン", "Nidoraĉjo", "VenemeumonasterienseLapin"], 0 ],
[ ["Nidorino", "ニドリーノ", "Nidoro", "VenemeumonasterienseTrux"], 0 ],
[ ["Nidoking", "ニドキング", "Nidoreĝo", "VenemeumonasterienseAtrox"], 0 ],
[ ["Clefairy", "ピッピ", "Piepi", "Melofee"], 6 ],
[ ["Clefable", "ピクシー", "Pixi", "Melodelfe"], 6 ],
[ ["Vulpix", "ロコン", "Goupix", "Sesvulpo"], 6 ],
[ ["Ninetales", "キュウコン", "Vulnona", "Feunard", "Vulpaŭ"], 6 ],
[ ["Jigglypuff", "プリン", "Pummeluff", "Rondoudou"], 6 ],
[ ["Wigglytuff", "プクリン", "Knuddeluff", "Grodoudou"], 6 ],
[ ["Zubat", "ズバット", "Nosferapti"], 4 ],
[ ["Golbat", "ゴルバット", "Nosferalto"], 4 ],
[ ["Oddish", "ナゾノクサ", "Myrapla", "Mystherbe", "OddiosWanderus"], 4 ],
[ ["Gloom", "クサイハナ", "Duflor", "Ortide"], 4 ],
[ ["Vileplume", "ラフレシア", "Giflor", "Rafflesia"], 4 ],
[ ["Paras", "パラス"], 4 ],
[ ["Parasect", "パラセクト", "Parasek"], 4 ],
[ ["Venonat", "コンパン", "Bluzuk", "	Mimitoss", "Teneo"], 4 ],
[ ["Venomoth", "モルフォン", "Omot", "Aeromite"], 4 ],
[ ["Diglett", "ディグダ", "Digda", "Taupiqueur"], 4 ],
[ ["Dugtrio", "ダグトリオ", "Digdri", "Triopikeur"], 4 ],
[ ["Meowth", "ニャース", "Mauzi", "Miaouss"], 4 ],
[ ["Persian", "ペルシアン", "Snobilikat"], 4 ],
[ ["Psyduck", "コダック", "Enton", "Psykokwak"], 4 ],
[ ["Golduck", "ゴルダック", "Entoron", "Akwakwak"], 4 ],
[ ["Mankey", "マンキー", "Menki", "Ferosinge"], 4 ],
[ ["Primeape", "オコリザル", "Rasaff", "Colossinge"], 4 ],
[ ["Growlithe", "ガーディ", "Fukano", "Caninos"], 2 ],
[ ["Arcanine", "ウインディ", "Arkani", "Arcanin"], 2 ],
[ ["Poliwag", "ニョロモ", "Quapsel", "Ptitard", "Ranidjoro"], 4 ],
[ ["Poliwhirl", "ニョロゾ", "Quaputzi", "Tetarte", "Ranjoro"], 4 ],
[ ["Poliwrath", "ニョロボン", "Quappo", "Tartard", "Diluvjoro"], 4 ],
[ ["Abra", "ケーシィ"], 2 ],
[ ["Kadabra", "ユンゲラー"], 2 ],
[ ["Alakazam", "フーディン", "Simsala"], 2 ],
[ ["Machop", "ワンリキー", "Machollo", "Machoc"], 2 ],
[ ["Machoke", "ゴーリキー", "Maschok", "Machopeur"], 2 ],
[ ["Machamp", "カイリキー", "Machomei", "Mackogneur"], 2 ],
[ ["Bellsprout", "マダツボミ", "Knofensa", "Chetiflor"], 4 ],
[ ["Weepinbell", "ウツドン", "Ultrigaria", "Boustiflor"], 4 ],
[ ["Victreebel", "Victreebell", "ウツボット", "Sarzenia", "Empiflor"], 4 ],
[ ["Tentacool", "メノクラゲ", "Tentacha"], 4 ],
[ ["Tentacruel", "ドククラゲ", "Tentoxa"], 4 ],
[ ["Geodude", "イシツブテ", "Kleinstein", "Racaillou"], 4 ],
[ ["Graveler", "ゴローン", "Georok", "Gravalanch"], 4 ],
[ ["Golem", "ゴローニャ", "Geowaz", "Grolem"], 4 ],
[ ["Ponyta", "ポニータ", "Ponita"], 4 ],
[ ["Rapidash", "ギャロップ", "Gallopa", "Galopa"], 4 ],
[ ["Slowpoke", "ヤドン", "Flegmon", "Ramoloss"], 4 ],
[ ["Slowbro", "ヤドラン", "Lahmus", "Flagadoss"], 4 ],
[ ["Magnemite", "コイル", "Magnetilo", "Magneti"], -1 ],
[ ["Magneton", "レアコイル", "Magneton"], -1 ],
[ ["Farfetch'd", "カモネギ", "Porenta", "Canarticho"], 4 ],
[ ["Doduo", "ドードー", "Dodu"], 4 ],
[ ["Dodrio", "ドードリオ", "Dodri"], 4 ],
[ ["Seel", "パウワウ", "Jurob", "Otaria"], 4 ],
[ ["Dewgong", "ジュゴン", "Jugong", "Lamantine"], 4 ],
[ ["Grimer", "ベトベター", "Sleima", "Tadmorv"], 4 ],
[ ["Muk", "ベトベトン", "Sleimok", "Grotadmorv"], 4 ],
[ ["Shellder", "シェルダー", "Muschas", "Kokiyas"], 4 ],
[ ["Cloyster", "パルシェン", "Austos", "Crustabri"], 4 ],
[ ["Gastly", "ゴース", "Nebulak", "Fantominus"], 4 ],
[ ["Haunter", "ゴースト", "Alpollo", "Spectrum"], 4 ],
[ ["Gengar", "ゲンガー", "Ectoplasma"], 4 ],
[ ["Onix", "イワーク", "TerravermisGigas"], 4 ],
[ ["Drowzee", "スリープ", "Traumato", "Soporifik"], 4 ],
[ ["Hypno", "スリーパー", "Hypnomade "], 4 ],
[ ["Krabby", "クラブ"], 4 ],
[ ["Kingler", "キングラー", "Krabboss"], 4 ],
[ ["Voltorb", "ビリリダマ", "Voltobal"], -1 ],
[ ["Electrode", "マルマイン", "Lektrobal", "Voltorbe"], -1 ],
[ ["Exeggcute", "タマタマ", "Owei", "Noeunoeuf", "OvusUnicephalis"], 4 ],
[ ["Exeggutor", "ナッシー", "Kokowei", "Noadkoko", "OvusArbrocephalis"], 4 ],
[ ["Cubone", "カラカラ", "Tragosso", "Osselait"], 4 ],
[ ["Marowak", "ガラガラ", "Knogga", "	Ossatueur"], 4 ],
[ ["Hitmonlee", "サワムラー", "Kicklee", "BellatorbestiaAcerpes" ], 0 ],
[ ["Hitmonchan", "エビワラー", "Nockchan", "Tygnon", "BellatorbestiaPugnus" ], 0 ],
[ ["Lickitung", "ベロリンガ", "Schlurp", "Excelangue"], 4 ],
[ ["Koffing", "ドガース", "Smogon", "Smogo"], 4 ],
[ ["Weezing", "マタドガス", "Smogmog", "Smogogo"], 4 ],
[ ["Rhyhorn", "サイホーン", "Rihorn", "Rhinocorne"], 4 ],
[ ["Rhydon", "サイドン", "Rizeros", "Rhinoferos"], 4 ],
[ ["Chansey", "ラッキー", "Chaneira", "Leveinard"], 8 ],
[ ["Tangela", "モンジャラ", "Saquedeneu"], 4 ],
[ ["Kangaskhan", "ガルーラ", "Kangama", "Kangourex"], 8 ],
[ ["Horsea", "タッツー", "Seeper", "Hypotrempe"], 4 ],
[ ["Seadra", "シードラ", "Seemon", "Hypocean"], 4 ],
[ ["Goldeen", "トサキント", "Goldini", "Poissirene"], 4 ],
[ ["Seaking", "アズマオウ", "Golking", "Poissoroy"], 4 ],
[ ["Staryu", "ヒトデマン", "Sterndu", "Stari"], -1 ],
[ ["Starmie", "スターミー", "Staross"], -1 ],
[ ["MrMime", "バリヤード", "Pantimos", "MMime"], 4 ],
[ ["Scyther", "ストライク", "Sichlor", "Insecateur"], 4 ],
[ ["Jynx", "ルージュラ", "Rossana", "Lippoutou"], 8 ],
[ ["Electabuzz", "エレブー", "Elektek"], 2 ],
[ ["Magmar", "ブーバー"], 2 ],
[ ["Pinsir", "カイロス", "Scarabrute"], 4 ],
[ ["Tauros", "ケンタロス"], 0 ],
[ ["Magikarp", "コイキング", "Karpador", "Magicarpe"], 4 ],
[ ["Gyarados", "ギャラドス", "Garados", "Leviator"], 4 ],
[ ["Lapras", "ラプラス", "Lokhlass"], 4 ],
[ ["Ditto", "メタモン", "Metamorph"], -1 ],
[ ["Eevee", "イーブイ", "Evoli"], 1 ],
[ ["Vaporeon", "シャワーズ", "Aquana", "Aquali", "Akveva"], 1 ],
[ ["Jolteon", "サンダース", "Blitza", "Voltali", "Volteva"], 1 ],
[ ["Flareon", "ブースター", "Flamara", "Pyroli", "Flameva"], 1 ],
[ ["Porygon", "ポリゴン"], -1 ],
[ ["Omanyte", "オムナイト", "Amonitas", "Amonita"], 1 ],
[ ["Omastar", "オムスター", "Amoroso", "Amonistar"], 1 ],
[ ["Kabuto", "カブト"], 1 ],
[ ["Kabutops", "カブトプス"], 1 ],
[ ["Aerodactyl", "プテラ", "	Ptera"], 1 ],
[ ["Snorlax", "カビゴン", "Relaxo", "Ronflex"], 1 ],
[ ["Articuno", "フリーザー", "Arktos", "Artikodin"], -1 ],
[ ["Zapdos", "サンダー", "Electhor"], -1 ],
[ ["Moltres", "ファイヤー", "Lavados", "Sulfura"], -1 ],
[ ["Dratini", "ミニリュウ", "Minidraco"], 4 ],
[ ["Dragonair", "ハクリュー", "Dragonir", "Draco"], 4 ],
[ ["Dragonite", "カイリュー", "Dragoran", "Dracolosse"], 4 ],
[ ["Mewtwo", "ミュウツー", "Mewtu", "Mju-du"], -1 ],
[ ["Mew", "ミュウ", "Mju"], -1 ],
[ ["Chikorita", "チコリータ", "Endivie", "Germignon", "Ĉikorjet"], 1 ],
[ ["Bayleef", "ベイリーフ", "Lorblatt", "Macronium", "Laŭrafoli"], 1 ],
[ ["Meganium", "メガニウム", "Meganie", "Greanjeg"], 1 ],
[ ["Cyndaquil", "ヒノアラシ", "Feurigel", "Hericendre", "Cindsorikil"], 1 ],
[ ["Quilava", "マグマラシ", "Igelavar", "Feurisson", "Magmhistriko"], 1 ],
[ ["Typhlosion", "バクフーン", "Tornupto", "Bangfŭono"], 1 ],
[ ["Totodile", "ワニノコ", "Karnimani", "Kaiminus", "AquacrocodilusImpiger", "Kaimetil"], 1 ],
[ ["Croconaw", "アリゲイツ", "Tyracroc", "Crocrodil", "AquacrocodilusSempermordis", "Ronĝroko"], 1 ],
[ ["Feraligatr", "Feraligator", "オーダイル", "Impergator", "Aligatueur", "AquacrocodilusDeimophobos", "Sovaĝrigator"], 1 ],
[ ["Sentret", "オタチ", "Wiesor", "Fouinette"], 4 ],
[ ["Furret", "オオタチ", "Wiesenior", "Fouinar"], 4 ],
[ ["Hoothoot", "ホーホー"], 4 ],
[ ["Noctowl", "ヨルノズク", "Noctuh", "Noarfang"], 4 ],
[ ["Ledyba", "レディバ", "Coxy"], 4 ],
[ ["Ledian", "レディアン", "Coxyclaque"], 4 ],
[ ["Spinarak", "イトマル", "Webarak", "Mimigal"], 4 ],
[ ["Ariados", "アリアドス", "Migalos"], 4 ],
[ ["Crobat", "クロバット", "Iksbat", "Nostenfer"], 4 ],
[ ["Chinchou", "チョンチー", "Lampi", "Loupio"], 4 ],
[ ["Lanturn", "ランターン"], 4 ],
[ ["Pichu", "ピチュー"], 4 ],
[ ["Cleffa", "ピィ", "Pii", "Melo"], 6 ],
[ ["Igglybuff", "ププリン", "Fluffeluff", "Toudoudou"], 6 ],
[ ["Togepi", "トゲピー", "OvapteryxAnkilova", "Togepio"], 1 ],
[ ["Togetic", "トゲチック", "OvapteryxMicropteryx", "Tokegio"], 1 ],
[ ["Natu", "ネイティ", "VatesaquilaVegrandis"], 4 ],
[ ["Xatu", "ネイティオ", "VatesaquilaEffigies"], 4 ],
[ ["Mareep", "メリープ", "Voltilamm", "Wattouat"], 4 ],
[ ["Flaaffy", "モココ", "Waaty", "Lainergie"], 4 ],
[ ["Ampharos", "デンリュウ", "Pharamp"], 4 ],
[ ["Bellossom", "キレイハナ", "Blubella", "Joliflor"], 4 ],
[ ["Marill", "Pikablu", "マリル"], 4 ],
[ ["Azumarill", "マリルリ"], 4 ],
[ ["Sudowoodo", "ウソッキー", "Mogelbaum", "Simularbre"], 4 ],
[ ["Politoed", "ニョロトノ", "Quaxo", "Tarpaud", "Verdinjoro"], 4 ],
[ ["Hoppip", "ハネッコ", "Hoppsross", "Granivol"], 4 ],
[ ["Skiploom", "ポポッコ", "Hubelupf", "Floravol"], 4 ],
[ ["Jumpluff", "ワタッコ", "Papungha", "Cotovol"], 4 ],
[ ["Aipom", "エイパム", "Griffel", "Capumain"], 4 ],
[ ["Sunkern", "ヒマナッツ", "Sonnkern", "Tournegrin"], 4 ],
[ ["Sunflora", "キマワリ", "Sonnflora", "Heliatronc"], 4 ],
[ ["Yanma", "ヤンヤンマ"], 4 ],
[ ["Wooper", "ウパー", "Felino", "Axoloto"], 4 ],
[ ["Quagsire", "ヌオー", "Morlord", "Maraiste"], 4 ],
[ ["Espeon", "エーフィ", "Psiana", "Mentali", "Psikeva"], 1 ],
[ ["Umbreon", "ブラッキー", "Nachtara", "Noctali", "Nokteva"], 1 ],
[ ["Murkrow", "ヤミカラス", "Kramurx", "Cornebre", "CorvustultusMaligna"], 4 ],
[ ["Slowking", "ヤドキング", "Laschoking", "Roigada"], 4 ],
[ ["Misdreavus", "ムウマ", "Traunfugil", "Feuforeve"], 4 ],
[ ["Unown", "アンノーン", "Icognito", "Zarbi"], -1 ],
[ ["Wobbuffet", "ソーナンス", "Woingenau", "Qulbutoke"], 4 ],
[ ["Girafarig", "キリンリキ"], 4 ],
[ ["Pineco", "クヌギダマ", "Tannza", "Pomdepic"], 4 ],
[ ["Forretress", "フォレトス", "Forstellka"], 4 ],
[ ["Dunsparce", "ノコッチ", "Dummisel", "Insolourdo"], 4 ],
[ ["Gligar", "グライガー", "Skorgla", "Scorplane", "ScorpiovolansVenenatis"], 4 ],
[ ["Steelix", "ハガネール", "Stahlos", "TerravermisFerratum"], 4 ],
[ ["Snubbull", "ブルー"], 6 ],
[ ["Granbull", "グランブル"], 6 ],
[ ["Qwilfish", "ハリーセン", "Baldorfish"], 4 ],
[ ["Scizor", "ハッサム", "Scherox", "Cizayox"], 4 ],
[ ["Shuckle", "ツボツボ", "Pottrott", "Caratroc"], 4 ],
[ ["Heracross", "ヘラクロス", "Skaraborn", "Scarhino"], 4 ],
[ ["Sneasel", "ニューラ", "Sniebel", "Farfuret"], 4 ],
[ ["Teddiursa", "ヒメグマ", "UrsusTeddius", "Teddringulis"], 4 ],
[ ["Ursaring", "リングマ", "UrsusMaxus"], 4 ],
[ ["Slugma", "マグマッグ", "Schneckmag", "Limagma"], 4 ],
[ ["Magcargo", "マグカルゴ", "Volcaropod"], 4 ],
[ ["Swinub", "ウリムー", "Quiekel", "Marcacrin"], 4 ],
[ ["Piloswine", "イノムー", "Keifel", "Cochignon"], 4 ],
[ ["Corsola", "サニーゴ", "Corasonn", "Corayon"], 6 ],
[ ["Remoraid", "テッポウオ"], 4 ],
[ ["Octillery", "オクタン"], 4 ],
[ ["Delibird", "デリバード", "Botogel", "Cadoizo"], 4 ],
[ ["Mantine", "マンタイン", "Mantax", "Demanta"], 4 ],
[ ["Skarmory", "エアームド", "Panzaeron", "Airmure"], 4 ],
[ ["Houndour", "デルビル", "Hunduster", "Malosse"], 4 ],
[ ["Houndoom", "ヘルガー", "Hundemon", "Demolosse"], 4 ],
[ ["Kingdra", "キングドラ", "Seedraking", "Hyporoi"], 4 ],
[ ["Phanpy", "ゴマゾウ"], 4 ],
[ ["Donphan", "ドンファン"], 4 ],
[ ["Porygon2", "ポリゴン２"], -1 ],
[ ["Stantler", "オドシシ", "Damhirplex", "Cerfrousse"], 4 ],
[ ["Smeargle", "ドーブル", "Farbeagle", "Queulorior"], 4 ],
[ ["Tyrogue", "バルキー", "Rabauz", "Debugant", "BellatorbestiaDiscipulus", "Batuzet"], 0 ],
[ ["Hitmontop", "カポエラー", "Kapoera", "BellatorbestiaRotocapitis"], 0 ],
[ ["Smoochum", "ムチュール", "Kussilla", "Lippouti"], 8 ],
[ ["Elekid", "エレキッド"], 2 ],
[ ["Magby", "ブビィ"], 2 ],
[ ["Miltank", "ミルタンク", "Ecremeuh"], 8 ],
[ ["Blissey", "ハピナス", "Heiteira", "Leuphorie"], 8 ],
[ ["Raikou", "ライコウ"], -1 ],
[ ["Entei", "エンテイ"], -1 ],
[ ["Suicune", "スイクン"], -1 ],
[ ["Larvitar", "ヨーギラス", "Embrylex"], 4 ],
[ ["Pupitar", "サナギラス", "Ymphect"], 4 ],
[ ["Tyranitar", "バンギラス", "Despotar", "Tyranocif"], 4 ],
[ ["Lugia", "ルギア"], -1 ],
[ ["Ho-Oh", "ホウオウ"], -1 ],
[ ["Celebi", "セレビィ"], -1 ],
[ ["Treecko", "キモリ", "Geckarbor", "Arcko", "Guarbeko"], 1 ],
[ ["Grovyle", "ジュプトル", "Reptain", "Massko"], 1 ],
[ ["Sceptile", "ジュカイン", "Gewaldro", "Jungko"], 1 ],
[ ["Torchic", "アチャモ", "Flemmli", "Poussifeu", "Torŝamo"], 1 ],
[ ["Combusken", "ワカシャモ", "Jungglut", "Galifeu"], 1 ],
[ ["Blaziken", "バシャーモ", "Lohgock", "Brasegali"], 1 ],
[ ["Mudkip", "ミズゴロウ", "Hydropi", "Gobou", "Mudkjo"], 1 ],
[ ["Marshtomp", "ヌマクロー", "Moorabbel", "Flobio"], 1 ],
[ ["Swampert", "ラグラージ", "Sumpex", "Laggron"], 1 ],
[ ["Poochyena", "ポチエナ", "Fiffyen", "Medhyena", "Poŭhieno"], 4 ],
[ ["Mightyena", "グラエナ", "Magnayen", "Grahyena", "Brunlupo"], 4 ],
[ ["Zigzagoon", "ジグザグマ", "Zigzachs", "Zigzaton", "Zigzanuko", "Tanuprocio"], 4 ],
[ ["Linoone", "マッスグマ", "Geradaks", "Lineon", "Rektofojn", "Massumelus"], 4 ],
[ ["Wurmple", "ケムッソ", "Waumpel", "Chenipotte"], 4 ],
[ ["Silcoon", "カラサリス", "Schaloko", "Armulys"], 4 ],
[ ["Beautifly", "アゲハント", "Papinella", "Charmillon"], 4 ],
[ ["Cascoon", "マユルド", "Panekon", "Blindalys"], 4 ],
[ ["Dustox", "ドクケイル", "Pudox", "Papinox"], 4 ],
[ ["Lotad", "ハスボー", "Loturzel", "Nenupiot"], 4 ],
[ ["Lombre", "ハスブレロ", "Lombrero"], 4 ],
[ ["Ludicolo", "ルンパッパ", "Kappalores"], 4 ],
[ ["Seedot", "タネボー", "Samurzel", "Grainipiot"], 4 ],
[ ["Nuzleaf", "コノハナ", "Blanas", "Pifeuil"], 4 ],
[ ["Shiftry", "ダーテング", "Tengulist", "Tengalice"], 4 ],
[ ["Taillow", "スバメ", "Schwalbini", "Nirondelle"], 4 ],
[ ["Swellow", "オオスバメ", "Schwalboss", "Heledelle"], 4 ],
[ ["Wingull", "キャモメ", "Goelise"], 4 ],
[ ["Pelipper", "ペリッパー", "Bekipan"], 4 ],
[ ["Ralts", "ラルトス", "Trasla", "Tarsal"], 4 ],
[ ["Kirlia", "キルリア"], 4 ],
[ ["Gardevoir", "サーナイト", "Guardevoir"], 4 ],
[ ["Surskit", "アメタマ", "Gehweiher", "Arakdo"], 4 ],
[ ["Masquerain", "アメモース", "Maskeregen", "Maskadra"], 4 ],
[ ["Shroomish", "キノココ", "Knilz", "Balignon"], 4 ],
[ ["Breloom", "キノガッサ", "Kapilz", "Chapignon"], 4 ],
[ ["Slakoth", "ナマケロ", "Bummelz", "Parecool"], 4 ],
[ ["Vigoroth", "ヤルキモノ", "Muntier"], 4 ],
[ ["Slaking", "ケッキング", "Letarking", "Monaflemit"], 4 ],
[ ["Nincada", "ツチニン", "Ningale"], 4 ],
[ ["Ninjask", "テッカニン"], 4 ],
[ ["Shedinja", "ヌケニン", "Ninjatom", "Munja"], -1 ],
[ ["Whismur", "ゴニョニョ", "Flurmel", "Chuchmur"], 4 ],
[ ["Loudred", "ドゴーム", "Krakeelo", "Ramboum"], 4 ],
[ ["Exploud", "バクオング", "Krawumms", "Brouhabam"], 4 ],
[ ["Makuhita", "マクノシタ"], 2 ],
[ ["Hariyama", "ハリテヤマ"], 2 ],
[ ["Azurill", "ルリリ"], 6 ],
[ ["Nosepass", "ノズパス", "Nasgnet", "Tarinor"], 4 ],
[ ["Skitty", "エネコ", "Eneco", "Rozoneko"], 6 ],
[ ["Delcatty", "エネコロロ", "Enekoro", "Tikloneko"], 6 ],
[ ["Sableye", "ヤミラミ", "Zobiris", "Tenefix"], 4 ],
[ ["Mawile", "クチート", "Flunkifer", "Mysdibule"], 4 ],
[ ["Aron", "ココドラ", "Stollunior", "Galekid"], 4 ],
[ ["Lairon", "コドラ", "Stollrak", "Galegon"], 4 ],
[ ["Aggron", "ボスゴドラ", "Stolloss", "Galeking"], 4 ],
[ ["Meditite", "アサナン", "Meditie", "Meditikka"], 4 ],
[ ["Medicham", "チャーレム", "Meditalis", "Charmina"], 4 ],
[ ["Electrike", "ラクライ", "Frizelbliz", "Dynavolt"], 4 ],
[ ["Manectric", "ライボルト", "Voltenso", "Elecsprint"], 4 ],
[ ["Plusle", "プラスル", "Posipi", "RedPikaclone"], 4 ],
[ ["Minun", "マイナン", "Negapi", "BluePikaclone"], 4 ],
[ ["Volbeat", "バルビート", "Muciole"], 0 ],
[ ["Illumise", "イルミーゼ", "Lumivole"], 8 ],
[ ["Roselia", "ロゼリア"], 4 ],
[ ["Gulpin", "ゴクリン", "Schluppuck", "Gloupti"], 4 ],
[ ["Swalot", "マルノーム", "Schlukwech", "Avaltout"], 4 ],
[ ["Carvanha", "キバニア", "Kanivanha"], 4 ],
[ ["Sharpedo", "サメハダー", "Tohaido"], 4 ],
[ ["Wailmer", "ホエルコ"], 4 ],
[ ["Wailord", "ホエルオー"], 4 ],
[ ["Numel", "ドンメル", "Camaub", "Chamallot"], 4 ],
[ ["Camerupt", "バクーダ"], 4 ],
[ ["Torkoal", "コータス", "Qurtel", "Chartor"], 4 ],
[ ["Spoink", "バネブー"], 4 ],
[ ["Grumpig", "ブーピッグ", "Groink", "Groret"], 4 ],
[ ["Spinda", "パッチール", "Pandir"], 4 ],
[ ["Trapinch", "ナックラー", "Knacklion", "Kraknoix"], 4 ],
[ ["Vibrava", "ビブラーバ", "Vibraninf"], 4 ],
[ ["Flygon", "フライゴン", "Libelldra", "Libegon"], 4 ],
[ ["Cacnea", "サボネア", "Tuska"], 4 ],
[ ["Cacturne", "ノクタス", "Noktuska"], 4 ],
[ ["Swablu", "チルット", "Wablu", "Tylton"], 4 ],
[ ["Altaria", "チルタリス"], 4 ],
[ ["Zangoose", "ザングース", "Sengo", "Mangriff", "Ungoosu"], 4 ],
[ ["Seviper", "ハブネーク", "Vipitis"], 4 ],
[ ["Lunatone", "ルナトーン", "Lunastein", "Seleroc"], -1 ],
[ ["Solrock", "ソルロック", "Sonnfel", "Solaroc"], -1 ],
[ ["Barboach", "ドジョッチ", "Schmerbe", "Barloche"], 4 ],
[ ["Whiscash", "ナマズン", "Welsar", "Barbicha"], 4 ],
[ ["Corphish", "ヘイガニ", "Krebscorps", "Ecrapince"], 4 ],
[ ["Crawdaunt", "シザリガー", "Krebutack", "Colhomard"], 4 ],
[ ["Baltoy", "ヤジロン", "Puppance", "Balbuto"], -1 ],
[ ["Claydol", "ネンドール", "Lepumentas", "Kaorine"], -1 ],
[ ["Lileep", "リリーラ", "Liliep", "Lilia", "GeoseraMultitelum"], 1 ],
[ ["Cradily", "ユレイドル", "Wielie", "Vacilys", "GeoseraMegatelum"], 1 ],
[ ["Anorith", "アノプス"], 1 ],
[ ["Armaldo", "アーマルド"], 1 ],
[ ["Feebas", "ヒンバス", "Barschwa", "Barpau"], 4 ],
[ ["Milotic", "ミロカロス", "Milobellus"], 4 ],
[ ["Castform", "ポワルン", "Formeo"], 4 ],
[ ["Kecleon", "カクレオン"], 4 ],
[ ["Shuppet", "カゲボウズ"], 4 ],
[ ["Banette", "ジュペッタ"], 4 ],
[ ["Duskull", "ヨマワル", "Zwirrlicht"], 4 ],
[ ["Dusclops", "サマヨール", "Zwirrklop"], 4 ],
[ ["Tropius", "トロピウス"], 4 ],
[ ["Chimecho", "チリーン", "Palimpalim"], 4 ],
[ ["Absol", "アブソル", "PantheraAntecursor"], 4 ],
[ ["Wynaut", "ソーナノ", "Isso"], 4 ],
[ ["Snorunt", "ユキワラシ", "Schneppke"], 4 ],
[ ["Glalie", "オニゴーリ", "Firnontor"], 4 ],
[ ["Spheal", "タマザラシ", "Seemops"], 4 ],
[ ["Sealeo", "トドグラー", "Seejong"], 4 ],
[ ["Walrein", "トドゼルガ", "Walraisa"], 4 ],
[ ["Clamperl", "パールル", "Perlu"], 4 ],
[ ["Huntail", "ハンテール", "Aalabyss"], 4 ],
[ ["Gorebyss", "サクラビス", "Saganabyss"], 4 ],
[ ["Relicanth", "ジーランス"], 1 ],
[ ["Luvdisc", "ラブカス", "Liebiskus"], 6 ],
[ ["Bagon", "タツベイ", "Kindwurm", "Lindvorju"], 4 ],
[ ["Shelgon", "コモルー", "Draschel", "Seskaraprju"], 4 ],
[ ["Salamence", "ボーマンダ", "Brutalanda", "Stratofortrju"], 4 ],
[ ["Beldum", "ダンバル", "Tanhel"], -1 ],
[ ["Metang", "メタング"], -1 ],
[ ["Metagross", "メタグロス"], -1 ],
[ ["Regirock", "レジロック"], -1 ],
[ ["Regice", "レジアイス"], -1 ],
[ ["Registeel", "レジスチル"], -1 ],
[ ["Latias", "ラティアス"], 8 ],
[ ["Latios", "ラティオス"], 0 ],
[ ["Kyogre", "カイオーガ"], -1 ],
[ ["Groudon", "グラードン"], -1 ],
[ ["Rayquaza", "レックウザ"], -1 ],
[ ["Jirachi", "ジラーチ"], -1 ],
[ ["Deoxys", "デオキシス"], -1 ],
[ ["Turtwig", "ナエトル", "Chelast", "Tortipouss"], 1 ],
[ ["Grotle", "ハヤシガメ", "Chelcarain", "Boskara"], 1 ],
[ ["Torterra", "ドダイトス", "Chelterrar"], 1 ],
[ ["Chimchar", "ヒコザル", "Panflam", "Ouisticram"], 1 ],
[ ["Monferno", "モウカザル", "Panpyro", "Chimpenfeu"], 1 ],
[ ["Infernape", "ゴウカザル", "Panferno", "Simiabraz"], 1 ],
[ ["Piplup", "ポッチャマ", "Plinfa", "Tiplouf"], 1 ],
[ ["Prinplup", "ポッタイシ", "Pliprin", "Prinplouf"], 1 ],
[ ["Empoleon", "エンペルト", "Impoleon", "Pingoleon"], 1 ],
[ ["Starly", "ムックル", "Staralili", "Etourmi"], 4 ],
[ ["Staravia", "ムクバード", "Etourvol"], 4 ],
[ ["Staraptor", "ムクホーク", "Etouraptor"], 4 ],
[ ["Bidoof", "ビッパ", "Bidiza", "Keunotor"], 4 ],
[ ["Bibarel", "ビーダル", "Bidifas", "Castorno"], 4 ],
[ ["Kricketot", "コロボーシ", "Zirpurze", "Crikzik"], 4 ],
[ ["Kricketune", "コロトック", "Zirpeise", "Melokrik"], 4 ],
[ ["Shinx", "コリンク", "Sheinux", "Lixy", "Kolinko"], 4 ],
[ ["Luxio", "ルクシオ", "Lumileo"], 4 ],
[ ["Luxray", "レントラー", "Luxtra", "Roentokat"], 4 ],
[ ["Budew", "スボミー", "Knospi", "Rozbouton"], 4 ],
[ ["Roserade", "ロズレイド"], 4 ],
[ ["Cranidos", "ズガイドス", "Koknodon", "Kranidos"], 1 ],
[ ["Rampardos", "ラムパルド", "Rameidon", "Charkos"], 1 ],
[ ["Shieldon", "タテトプス", "Schilterus", "Dinoclier"], 1 ],
[ ["Bastiodon", "トリテプス", "Bollterus"], 1 ],
[ ["Burmy", "ミノムッチ", "Cheniti"], 4 ],
[ ["Wormadam", "ミノマダム", "Burmadame", "Cheniselle"], 8 ],
[ ["Mothim", "ガーメイル", "Moterpel", "Papilord"], 0 ],
[ ["Combee", "ミツハニー", "Wadribie", "Apitrini"], 1 ],
[ ["Vespiquen", "ビークイン", "Honweisel", "Apireine"], 8 ],
[ ["Pachirisu", "パチリス"], 4 ],
[ ["Buizel", "ブイゼル", "Bamelin", "Mustebouee", "Buutrel"], 4 ],
[ ["Floatzel", "フローゼル", "Bojelin", "Musteflott", "Floatrel"], 4 ],
[ ["Cherubi", "チェリンボ", "Kikugi", "Ceribou"], 4 ],
[ ["Cherrim", "チェリム", "Kinoso", "Ceriflor"], 4 ],
[ ["Shellos", "カラナクシ", "Schalellos", "Sancoki"], 4 ],
[ ["Gastrodon", "トリトドン", "Tritosor"], 4 ],
[ ["Ambipom", "エテボース", "Ambidiffel", "Capidextre"], 4 ],
[ ["Drifloon", "フワンテ", "Driftlon", "Baudrive"], 4 ],
[ ["Drifblim", "フワライド", "Drifzepeli", "Grodrive"], 4 ],
[ ["Buneary", "ミミロル", "Haspiror", "Laporeille"], 4 ],
[ ["Lopunny", "ミミロップ", "Schlapor", "Lockpin"], 4 ],
[ ["Mismagius", "ムウマージ", "Traunmagil", "Magireve"], 4 ],
[ ["Honchkrow", "ドンカラス", "Kramshef", "Corboss", "CorvustultusMagnus"], 4 ],
[ ["Glameow", "ニャルマー", "Charmian", "Chaglam"], 6 ],
[ ["Purugly", "ブニャット", "Shnurgarst", "Chaffreux"], 6 ],
[ ["Chingling", "リーシャン", "Klingplim", "Korillon"], 4 ],
[ ["Stunky", "スカンプー", "Skunkapuh", "Moufouette"], 4 ],
[ ["Skuntank", "スカタンク", "Skunktank", "Moufflair"], 4 ],
[ ["Bronzor", "ドーミラー", "Bronzel", "Archeomire"], -1 ],
[ ["Bronzong", "ドータクン", "Archeodong"], -1 ],
[ ["Bonsly", "ウソハチ", "Mobai", "Manzai"], 4 ],
[ ["MimeJr", "マネネ", "Pantimimi"], 4 ],
[ ["Happiny", "ピンプク", "Wonneira", "Ptiravi"], 8 ],
[ ["Chatot", "ペラップ", "Plaudagei", "Pijako"], 4 ],
[ ["Spiritomb", "ミカルゲ", "Kryppuk", "LemuresMaledicus", "Marĉanmures"], 4 ],
[ ["Gible", "フカマル", "Kaumalat", "Griknot"], 4 ],
[ ["Gabite", "ガバイト", "Knarksel", "Carmache"], 4 ],
[ ["Garchomp", "ガブリアス", "Knakrack", "Carchacrok"], 4 ],
[ ["Munchlax", "ゴンベ", "Mampfaxo", "Goinfrex"], 1 ],
[ ["Riolu", "リオル",], 1 ],
[ ["Lucario", "ルカリオ"], 1 ],
[ ["Hippopotas", "ヒポポタス"], 4 ],
[ ["Hippowdon", "カバルドン", "Hippoterus", "Hippodocus"], 4 ],
[ ["Skorupi", "スコルピ", "Pionskora", "Rapion"], 4 ],
[ ["Drapion", "ドラピオン", "Piondragi", "Drascore"], 4 ],
[ ["Croagunk", "グレッグル", "Glibunkel", "Cradopaud"], 4 ],
[ ["Toxicroak", "ドクロッグ", "Toxiquak", "Coatox"], 4 ],
[ ["Carnivine", "マスキッパ", "Venuflibis", "Vortente"], 4 ],
[ ["Finneon", "ケイコウオ", "Ecayon"], 4 ],
[ ["Lumineon", "ネオラント"], 4 ],
[ ["Mantyke", "タマンタ", "Mantirps", "Babimanta"], 4 ],
[ ["Snover", "ユキカブリ", "Shnebedeck", "Blizzi"], 4 ],
[ ["Abomasnow", "ユキノオー", "Rexblisar", "Blizzaroi"], 4 ],
[ ["Weavile", "マニューラ", "Snibunna", "Dimoret"], 4 ],
[ ["Magnezone", "ジバコイル"], -1 ],
[ ["Lickilicky", "ベロベルト", "Schlurplek", "Coudlangue"], 4 ],
[ ["Rhyperior", "ドサイドン", "Rihornior", "Rhinastoc"], 4 ],
[ ["Tangrowth", "モジャンボ", "Tangoloss", "Bouldeneu"], 4 ],
[ ["Electivire", "エレキブル", "Elevoltek", "Elekable"], 2 ],
[ ["Magmortar", "ブーバーン", "Magbrant", "Maganon"], 2 ],
[ ["Togekiss", "トゲキッス", "OvapteryxImperator", "Tokegiŝo"], 1 ],
[ ["Yanmega", "メガヤンマ"], 4 ],
[ ["Leafeon", "リーフィア", "Folipurba", "Phyllali", "Foleva"], 1 ],
[ ["Glaceon", "グレイシア", "Glaziola", "Givrali", "Glaceva"], 1 ],
[ ["Gliscor", "グライオン", "Skorgro", "Scorvol", "ScorpiovolansTerribilis"], 4 ],
[ ["Mamoswine", "マンムー", "Mamutel", "Mammochon"], 4 ],
[ ["Porygon-Z", "ポリゴンＺ"], -1 ],
[ ["Gallade", "エルレイド", "Galagladi", "Gallame"], 0 ],
[ ["Probopass", "ダイノーズ", "Voluminas", "Tarinorme"], 4 ],
[ ["Dusknoir", "ヨノワール", "Zwirrfinst", "Noctunoir"], 4 ],
[ ["Froslass", "ユキメノコ", "Frosdedje", "Momartik"], 8 ],
[ ["Rotom", "ロトム", "Motisma"], -1 ],
[ ["Uxie", "ユクシー", "Selfe", "Crehelf"], -1 ],
[ ["Mesprit", "エムリット", "Vesprit", "Crefollet"], -1 ],
[ ["Azelf", "アグノム", "Tobutz", "Crefadet"], -1 ],
[ ["Dialga", "ディアルガ"], -1 ],
[ ["Palkia", "パルキア"], -1 ],
[ ["Heatran", "ヒードラン"], 4 ],
[ ["Regigigas", "レジギガス", "Reggie_Giygas"], -1 ],
[ ["Giratina", "ギラティナ"], -1 ],
[ ["Cresselia", "クレセリア"], 8 ],
[ ["Phione", "フィオネ"], -1 ],
[ ["Manaphy", "マナフィ"], -1 ],
[ ["Darkrai", "ダークライ"], -1 ],
[ ["Shaymin", "シェイミ", "Ŝaimjo"], -1 ],
[ ["Arceus", "アルセウス"], -1 ],
[ ["Victini", "ビクティニ"], -1 ],
[ ["Snivy", "ツタージャ", "Serpifeu", "Vipélierre", "Smugleaf", "ArbroserpensSuperior", "Aroglis"], 1 ],
[ ["Servine", "ジャノビー", "Efoserp", "Lianaja", "Smugprince", "ArbroserpensCoeloraptor", "Arorovitos"], 1 ],
[ ["Serperior", "ジャローダ", "Serpiroyal", "Majaspic", "Smuglord", "ArbroserpensMajoris", "Smerperitos"], 1 ],
[ ["Tepig", "ポカブ", "Floink", "Gruikui", "Varmorkis"], 1 ],
[ ["Pignite", "チャオブー", "Ferkokel", "Grotichon"], 1 ],
[ ["Emboar", "エンブオー", "Flambirex", "Roitiflam"], 1 ],
[ ["Oshawott", "ミジュマル", "Ottaro", "Moustillon", "Mizustro"], 1 ],
[ ["Dewott", "フタチマル", "Zwottronin", "Mateloutre"], 1 ],
[ ["Samurott", "ダイケンキ", "Admurai", "Clamiral"], 1 ],
[ ["Patrat", "ミネズミ", "Nagelotz", "Ratentif"], 4 ],
[ ["Watchog", "ミルホッグ", "Kukmarda", "Miradar"], 4 ],
[ ["Lillipup", "ヨーテリー", "Yorkleff", "Ponchiot"], 4 ],
[ ["Herdier", "ハーデリア", "Terribark", "Ponchien"], 4 ],
[ ["Stoutland", "ムーランド", "Bissbark", "Mastouffe"], 4 ],
[ ["Purrloin", "チョロネコ", "Felilou", "Chacripan"], 4 ],
[ ["Liepard", "レパルダス", "Kleoparda", "Léopardas"], 4 ],
[ ["Pansage", "ヤナップ", "Vegimak", "Feuillajou"], 1 ],
[ ["Simisage", "ヤナッキー", "Vegichita", "Feuiloutan"], 1 ],
[ ["Pansear", "バオップ", "Grillmak", "Flamajou"], 1 ],
[ ["Simisear", "バオッキー", "Grillchita", "Flamoutan"], 1 ],
[ ["Panpour", "ヒヤップ", "Sodamak", "Flotajou"], 1 ],
[ ["Simipour", "ヒヤッキー", "Sodachita", "Flotoutan"], 1 ],
[ ["Munna", "ムンナ", "Somniam"], 4 ],
[ ["Musharna", "ムシャーナ", "Somnivora", "Mushana"], 4 ],
[ ["Pidove", "マメパト", "Dusselgurr", "Poichigeon", "Plumpuu"], 4 ],
[ ["Tranquill", "ハトーボー", "Navitaub", "Colombeau", "Koloturno"], 4 ],
[ ["Unfezant", "ケンホロウ", "Fasasnob", "Déflaisan", "Netimfezan"], 4 ],
[ ["Blitzle", "シママ", "Elezeba", "Zébribon", "EquusVoltera"], 4 ],
[ ["Zebstrika", "ゼブライカ", "Zebritz", "Zéblitz", "EquusTeslus"], 4 ],
[ ["Roggenrola", "ダンゴロ", "Kiesling", "Nodulithe"], 4 ],
[ ["Boldore", "ガントル", "Sedimantur", "Géolithe"], 4 ],
[ ["Gigalith", "ギガイアス", "Brockoloss", "Gigalithe"], 4 ],
[ ["Woobat", "コロモリ", "Fleknoil", "Chovsourir"], 4 ],
[ ["Swoobat", "ココロモリ", "Fletiamo", "Rhinolove"], 4 ],
[ ["Drilbur", "モグリュー", "Rotomurf", "Rototaupe"], 4 ],
[ ["Excadrill", "ドリュウズ", "Stalobor", "Minotaupe"], 4 ],
[ ["Audino", "タブンネ", "Ohrdoch", "Nanméouïe"], 4 ],
[ ["Timburr", "ドッコラー", "Praktibalk", "Charpenti"], 2 ],
[ ["Gurdurr", "ドテッコツ", "Strepoli", "Ouvrifier"], 2 ],
[ ["Conkeldurr", "ローブシン", "Meistagrif", "Bétochef"], 2 ],
[ ["Tympole", "オタマロ", "Schallquap", "Tritonde"], 4 ],
[ ["Palpitoad", "ガマガル", "Mebrana", "Batracné"], 4 ],
[ ["Seismitoad", "ガマゲロゲ", "Branawarz", "Crapustule"], 4 ],
[ ["Throh", "ナゲキ", "Jiutesto", "Judokrak"], 0 ],
[ ["Sawk", "ダゲキ", "Karadonis", "Karaclée"], 0 ],
[ ["Sewaddle", "クルミル", "Strawickl", "Larveyette"], 4 ],
[ ["Swadloon", "クルマユ", "Folikon", "Couverdure"], 4 ],
[ ["Leavanny", "ハハコモリ", "Matrifol", "Manternel"], 4 ],
[ ["Venipede", "フシデ", "Toxiped", "Venipatte"], 4 ],
[ ["Whirlipede", "ホイーガ", "Rollum", "Scobolide"], 4 ],
[ ["Scolipede", "ペンドラー", "Cerapendra", "Brutapode"], 4 ],
[ ["Cottonee", "モンメン", "Waumboll", "Doudouvet"], 4 ],
[ ["Whimsicott", "エルフーン", "Elfun", "Farfaduvet"], 4 ],
[ ["Petilil", "チュリネ", "Lilminip", "Chlorobule"], 8 ],
[ ["Lilligant", "ドレディア", "Dressella", "Fragilady"], 8 ],
[ ["Basculin", "バスラオ", "Barschuft", "Bargantua"], 4 ],
[ ["Sandile", "メグロコ", "Ganovil", "Mascaïman"], 4 ],
[ ["Krokorok", "ワルビル", "Rokkaiman", "Escroco"], 4 ],
[ ["Krookodile", "ワルビアル", "Rabigator", "Crocorible"], 4 ],
[ ["Darumaka", "ダルマッカ", "Flampion", "Darumarond"], 4 ],
[ ["Darmanitan", "ヒヒダルマ", "Flampivian", "Darumacho"], 4 ],
[ ["Maractus", "マラカッチ", "Maracamba", "Maracachi"], 4 ],
[ ["Dwebble", "イシズマイ", "Lithomith", "Crabicoque"], 4 ],
[ ["Crustle", "イワパレス", "Castellith", "Crabaraque"], 4 ],
[ ["Scraggy", "ズルッグ", "Zurrokex", "Baggiguane"], 4 ],
[ ["Scrafty", "ズルズキン", "Irokex", "Baggaïd"], 4 ],
[ ["Sigilyph", "シンボラー", "Symvolara", "Cryptéro"], 4 ],
[ ["Yamask", "デスマス", "Makabaja", "Tutafeh"], 4 ],
[ ["Cofagrigus", "デスカーン", "Echnatoll", "Tutankafer"], 4 ],
[ ["Tirtouga", "プロトーガ", "Galapaflos", "Carapagos"], 1 ],
[ ["Carracosta", "アバゴーラ", "Karippas", "Mégapagos"], 1 ],
[ ["Archen", "アーケン", "Flapteryx", "Arkéapti"], 1 ],
[ ["Archeops", "アーケオス", "Aeropteryx", "Aéroptéryx"], 1 ],
[ ["Trubbish", "ヤブクロン", "Unratütox", "Miamiasme"], 4 ],
[ ["Garbodor", "ダストダス", "Deponitox", "Miasmax"], 4 ],
[ ["Zorua", "ゾロア"], 1 ],
[ ["Zoroark", "ゾロアーク"], 1 ],
[ ["Minccino", "チラーミィ", "Picochilla", "Chinchidou", "PulchystricensPeregrinocax"], 6 ],
[ ["Cinccino", "チラチーノ", "Chillabell", "Pashmilla", "PulchystricensTogacaudam"], 6 ],
[ ["Gothita", "ゴチム", "Mollimorba", "Scrutella"], 6 ],
[ ["Gothorita", "ゴチミル", "Hypnomorba", "Mesmérella"], 6 ],
[ ["Gothitelle", "ゴチルゼル", "Morbitesse", "Sidérella"], 6 ],
[ ["Solosis", "ユニラン", "Monozyto", "Nucléos"], 4 ],
[ ["Duosion", "ダブラン", "Mitodos", "Méios"], 4 ],
[ ["Reuniclus", "ランクルス", "Zytomega", "Symbios"], 4 ],
[ ["Ducklett", "コアルヒー", "Piccolente", "Couaneton"], 4 ],
[ ["Swanna", "スワンナ", "Swaroness", "Lakmécygne"], 4 ],
[ ["Vanillite", "バニプッチ", "Gelatini", "Sorbébé"], 4 ],
[ ["Vanillish", "バニリッチ", "Gelatroppo", "Sorboul"], 4 ],
[ ["Vanilluxe", "バイバニラ", "Gelatwino", "Sorbouboul"], 4 ],
[ ["Deerling", "シキジカ", "Sesokitz", "Vivaldaim"], 4 ],
[ ["Sawsbuck", "メブキジカ", "Kronjuwild", "Haydaim"], 4 ],
[ ["Emolga", "エモンガ"], 4 ],
[ ["Karrablast", "カブルモ", "Laukaps", "Carabing"], 4 ],
[ ["Escavalier", "シュバルゴ", "Cavalanzas", "Lançargot"], 4 ],
[ ["Foongus", "タマゲタケ", "Tarnpignon", "Trompignon"], 4 ],
[ ["Amoonguss", "モロバレル", "Hutsassa", "Gaulet"], 4 ],
[ ["Frillish", "プルリル", "Quabbel", "Viskuse"], 4 ],
[ ["Jellicent", "ブルンゲル", "Apoquallyp", "Moyade"], 4 ],
[ ["Alomomola", "ママンボウ", "Mamolida", "Mamanbo"], 4 ],
[ ["Joltik", "バチュル", "Wattzapf", "Statitik", "AponophelmaJoltus"], 4 ],
[ ["Galvantula", "デンチュラ", "Voltula", "Mygavolt", "AponophelmaGalvantus"], 4 ],
[ ["Ferroseed", "テッシード", "Kastadur", "Grindur"], 4 ],
[ ["Ferrothorn", "テッシード", "Tentantel", "Noacier"], 4 ],
[ ["Klink", "ギアル", "Klikk", "Tic"], -1 ],
[ ["Klang", "ギギアル", "Kliklak", "Clic"], -1 ],
[ ["Klinklang", "ギギギアル", "Klikdiklak", "Cliticlic"], -1 ],
[ ["Tynamo", "シビシラス", "Zapplardin", "Anchwatt"], 4 ],
[ ["Eelektrik", "シビビール", "Zapplalek", "Lampéroie"], 4 ],
[ ["Eelektross", "シビルドン", "Zapplarang", "Ohmassacre"], 4 ],
[ ["Elgyem", "リグレー", "Pygraulon", "Lewsor"], 4 ],
[ ["Beheeyem", "オーベム", "Megalon", "Neitram"], 4 ],
[ ["Litwick", "ヒトモシ", "Lichtel", "Funécire"], 4 ],
[ ["Lampent", "ランプラー", "Laternecto", "Mélancolux"], 4 ],
[ ["Chandelure", "シャンデラ", "Skelabra", "Lugulabre"], 4 ],
[ ["Axew", "キバゴ", "Milza", "Coupenotte"], 4 ],
[ ["Fraxure", "オノンド", "Sharfax", "Incisache"], 4 ],
[ ["Haxorus", "オノノクス", "Maxax", "Tranchodon"], 4 ],
[ ["Cubchoo", "クマシュン", "Petznief", "Polarhume"], 4 ],
[ ["Beartic", "ツンベアー", "Siberio", "Polagriffe"], 4 ],
[ ["Cryogonal", "フリージオ", "Frigimetri", "Hexagel"], -1 ],
[ ["Shelmet", "チョボマキ", "Schnuthelm", "Escargaume"], 4 ],
[ ["Accelgor", "アギルダー", "Hydragil", "Limaspeed"], 4 ],
[ ["Stunfisk", "マッギョ", "Flunschlik", "Limonde"], 4 ],
[ ["Mienfoo", "コジョフー", "Lin-Fu", "Kungfouine"], 4 ],
[ ["Mienshao", "コジョンド", "Wie-Shu", "Shaofouine"], 4 ],
[ ["Druddigon", "クリムガン", "Shardrago", "Drakkarmin", "SquadilosaurusFidelus"], 4 ],
[ ["Golett", "ゴビット", "Golbit", "Gringolem"], -1 ],
[ ["Golurk", "ゴルーグ", "Golgantes", "Golemastoc"], -1 ],
[ ["Pawniard", "コマタナ", "Gladiantri", "Scalpion"], 4 ],
[ ["Bisharp", "キリキザン", "Caesurio", "Scalproie"], 4 ],
[ ["Bouffalant", "バッフロン", "Bisofank", "Frison"], 4 ],
[ ["Rufflet", "ワシボン", "Geronimatz", "Furaiglon"], 0 ],
[ ["Braviary", "ウォーグル", "Washakwil", "Gueriaigle"], 0 ],
[ ["Vullaby", "バルチャイ", "Skallyk", "Vostourno"], 8 ],
[ ["Mandibuzz", "バルジーナ", "Grypheldis", "Vaututrice"], 8 ],
[ ["Heatmor", "クイタラン", "Furnifraß", "Aflamanoir"], 4 ],
[ ["Durant", "アイアント", "Fermicula", "Fermite"], 4 ],
[ ["Deino", "モノズ", "Kapuno", "Solochi", "CryptodracoMelanoculusMonocephalus"], 4 ],
[ ["Zweilous", "ジヘッド", "Duodino", "Diamat", "CryptodracoMelanoculusBicephalus"], 4 ],
[ ["Hydreigon", "サザンドラ", "Trikephalo", "Trioxhydre", "CryptodracoMelanoculusCephalocheirus"], 4 ],
[ ["Larvesta", "メラルバ", "Ignivor", "Pyronille"], 4 ],
[ ["Volcarona", "ウルガモス", "Ramoth", "Pyrax"], 4 ],
[ ["Cobalion", "コバルオン", "Kobalium", "Cobaltium"], -1 ],
[ ["Terrakion", "テラキオン", "Terrakium"], -1 ],
[ ["Virizion", "ビリジオン", "Viridium"], -1 ],
[ ["Tornadus", "トルネロス", "Boreos", "Boréas"], 0 ],
[ ["Thundurus", "ボルトロス", "Voltolos", "Fulguris"], 0 ],
[ ["Reshiram", "レシラム"], -1 ],
[ ["Zekrom", "ゼクロム"], -1 ],
[ ["Landorus", "ランドロス", "Demeteros", "Démétéros"], 0 ],
[ ["Kyurem", "キュレム"], -1 ],
[ ["Keldeo", "ケルディオ"], -1 ],
[ ["Meloetta", "メロエッタ"], -1 ],
[ ["Genesect", "ゲノセクト"], -1 ],
[ ["Chespin", "Marisson", "Igamaro", "ハリマロン"], 1],
[ ["Quilladin", "Boguérisse", "Igastarnish", "バリボーグ"], 1],
[ ["Chesnaught", "Blindépique", "Brigaron", "ブリガロン"], 1],
[ ["Fennekin", "Feunnec", "Fynx", "フォッコ"], 1],
[ ["Braixen", "Roussil", "Rutena", "テールナー"], 1],
[ ["Delphox", "Goupelin", "Fennexis", "マフォクシー"], 1],
[ ["Froakie", "Grenousse", "Froxy", "ケロマツ"], 1],
[ ["Frogadier", "Croâporal", "Amphizel", "ゲコガシラ"], 1],
[ ["Greninja", "Amphinobi", "Quajutsu", "ゲッコウガ"], 1],
[ ["Bunnelby", "Saperaeu", "Scoppel", "ホルビー"], 4],
[ ["Diggersby", "Excavarenne", "Grebbit", "ホルード"], 4],
[ ["Fletchling", "Passerouge", "Dartiri", "ヤヤコマ"], 4],
[ ["Fletchinder", "Braisillon", "Dartignis", "ヒノヤコマ"], 4],
[ ["Talonflame", "Flambusard", "Fiaro", "ファイアロー"], 4],
[ ["Scatterbug", "Lépidonille", "Purmel", "コフキムシ"], 4],
[ ["Spewpa", "Pérégrain", "Puponcho", "コフーライ"], 4],
[ ["Vivillon", "Prismillon", "Vivillon", "ビビヨン"], 4],
[ ["Litleo", "Hélionceau", "Leufeo", "シシコ"], 6],
[ ["Pyroar", "Némélios", "Pyroleo", "カエンジシ"], 6],
[ ["Flabébé", "Flabébé", "Flabébé", "フラべべ"], 8],
[ ["Floette", "Floette", "Fleoette", "フラエッテ"], 8],
[ ["Florges", "Florges", "Florges", "フラージェス"], 8],
[ ["Skiddo", "Cabriolaine", "Mähikel", "メェークル"], 4],
[ ["Gogoat", "Chevroum", "Chevrumm", "ゴーゴート"], 4],
[ ["Pancham", "Pandespiègle", "Pam-Pam", "ヤンチャム"], 4],
[ ["Pangoro", "Pandarbare", "Pandagro", "ゴロンダ"], 4],
[ ["Furfrou", "Coufarel", "Coiffwaff", "トリミアン"], 4],
[ ["Espurr", "Psystigri", "Psiau", "ニャスパー"], 4],
[ ["Meowstic", "Mistigrix", "Psiaugon", "ニャオニクス"], 4],
[ ["Honedge", "Monorpale", "Gramokles", "ヒトツキ"], 4],
[ ["Doublade", "Dimoclès", "Duokles", "ニダンギル"], 4],
[ ["Aegislash", "Exagide", "Durengard", "ギルガルド"], 4],
[ ["Spritzee", "Fluvetin", "Parfi", "シュシュプ"], 4],
[ ["Aromatisse", "Cocotine", "Parfinesse", "フレフワン"], 4],
[ ["Swirlix", "Sucroquin", "Flauschling", "ペロッパフ"], 4],
[ ["Slurpuff", "Cupcanaille", "Sabbaione", "ペロリーム"], 4],
[ ["Inkay", "Sepiatop", "Iscalar", "マーイーカ"], 4],
[ ["Malamar", "Sepiatroce", "Calamanero", "カラマネロ"], 4],
[ ["Binacle", "Opermine", "Bithora", "カメテテ"], 4],
[ ["Barbaracle", "Golgopathe", "Thanathora", "ガメノデス"], 4],
[ ["Skrelp", "Venalgue", "Algitt", "クズモー"], 4],
[ ["Dragalge", "Kravarech", "Tandrak", "ドラミドロ"], 4],
[ ["Clauncher", "Flingouste", "Scampisto", "ウデッポウ"], 4],
[ ["Clawitzer", "Gamblast", "Wummer", "ブロスター"], 4],
[ ["Helioptile", "Galvaran", "Eguana", "エリキテル"], 4],
[ ["Heliolisk", "Iguolta", "Elezard", "エレザード"], 4],
[ ["Tyrunt", "Ptyranidur", "Balgoras", "チゴラス"], 1],
[ ["Tyrantrum", "Rexillius", "Monagoras", "ガチゴラス"], 1],
[ ["Amaura", "Amagara", "Amarino", "アマルス"], 1],
[ ["Aurorus", "Dragmara", "Amagarga", "アマルルガ"], 1],
[ ["Sylveon", "Nymphali", "Feelinara", "ニンフィア"], 1],
[ ["Hawlucha", "Brutalibré", "Resladero", "ルチャブル"], 4],
[ ["Dedenne", "Dedenne", "Dedenne", "デデンネ"], 4],
[ ["Carbink", "Strassie", "Rocara", "メレシー"], -1],
[ ["Goomy", "Mucuscule", "Viscora", "ヌメラ"], 4],
[ ["Sliggoo", "Colimucus", "Viscargot", "ヌメイル"], 4],
[ ["Goodra", "Muplodocus", "Viscorgon", "ヌメルゴン"], 4],
[ ["Klefki", "Trousselin", "Clavion", "クレッフィ"], 4],
[ ["Phantump", "Brocélôme", "Paragoni", "ボクレー"], 4],
[ ["Trevenant", "Desséliande", "Trombork", "オーロット"], 4],
[ ["Pumpkaboo", "Pitrouille", "Irrbis", "バケッチャ"], 4],
[ ["Gourgeist", "Banshitrouye", "Pumpdjinn", "パンプジン"], 4],
[ ["Bergmite", "Grelaçon", "Arktip", "カチコール"], 4],
[ ["Avalugg", "Séracrawl", "Arktillas", "クレベース"], 4],
[ ["Noibat", "Sonistrelle", "eF-eM", "オンバット"], 4],
[ ["Noivern", "Bruyverne", "UHaFnir", "オンバーン"], 4],
[ ["Xerneas", "Xerneas", "Xerneas", "ゼルネアス"], -1],
[ ["Yveltal", "Yveltal", "Yveltal", "イベルタル"], -1],
[ ["Zygarde", "Zygarde", "Zygarde", "ジガルデ"], -1],
[ ["Diancie", "Diancie", "Diancie", "ディアンシー"], -1],
[ ["Hoopa", "Hoopa", "Hoopa", "フーパ"], -1],
[ ["Volcanion", "Volcanion", "Volcanion", "ボルケニオン"], -1],
[ ["Substitute"], -1],
    ];

var rpJokes = false;
if(location.href.indexOf("waapt-rp") >= 0) rpJokes = true;

Speeqe.random =  function(num) {
    return Math.floor(Math.random() * num)+1;
};

Speeqe.generate_anonymous_nick = function() {

    // R : *number* of the chosen Pokémon
	var R = Speeqe.random(Speeqe.NAMES.length)-1;
	//R = Speeqe.random(2)+569; // everybody is Zoroark
	var namearray = Speeqe.NAMES[R][0];
	var ratio = Speeqe.NAMES[R][1];
	var level = Speeqe.random(100);
	var pvalue = Speeqe.random(4294967296);
	var gvalue = Speeqe.random(8);
	var ismega = Speeqe.random(10);
	var weird = Speeqe.random(50);
	var isshiny = Speeqe.random(4096)
	var haspokerus = Speeqe.random(211786)
	var altname = Speeqe.random(namearray.length)-1;
	var nameweight = Speeqe.random(14);
    // pokemon : *name* of the chosen Pokémon
	var pokemon = ((namearray.length == 1) ? namearray[0] : ((nameweight == 1) ? namearray[altname] : namearray[0]));

	var prefix= "Wild";
	var suffix= "";
	var gender= "";
	var monogender_uses_symbol= false; // unused ATM


	// Special Prefixes / Suffixes
	if (weird == 1) { prefix= "Shadow"; } // COL/XD Extension
	if (weird == 2) { prefix= "Imaginary"; }
	if (weird == 3) { prefix= "Complex"; } // Because if there's Imaginary...
	// 4 == Delta, applies to name
	if (weird == 5) { prefix= "Dark"; } // TCG Extension
	if (weird == 6) { prefix= "Light"; } // TCG Extension
	if (weird == 7) { prefix= "Giant"; } // A common enough Anime motif
	if (weird == 8) { prefix= "Pink"; } // Orange Islands Extension
	if (weird == 9) { prefix= "Feral"; } // Not evil, E-D-G-Y!
	
	if (weird == 11) { suffix= "-ex"; } // Pokémon-ex
	if (weird == 12) { suffix= "_Prime"; } // Pokémon Prime
	if (weird == 13 || weird == 14) { suffix= "☆"; } // ☆ (TCG) 
	// (LV.X and EX (not "-ex") can't be implemented yet)
	// if (weird == 15) { } // Pokémon-EX
	// if (weird == 16) { } // Pokémon_LV.X
	
	if (weird == 17) { prefix= "Civilized"; } // Not Feral at all!
	if (weird == 18) { prefix= "Baby"; level = (level % 10) + 1;} // Young
	if (weird == 19) { prefix= "Omnipotent?";} // hax
	if (weird == 20) { prefix= "Plushie";} // hax
	if (weird == 21) { prefix= "Toy";} // Rumble series

    // Pokémon-specific prefixes/suffixes:   
    
	// Cosmic prefix
	var cosmicMons = [173, 35, 36, 337, 338, 605, 606, 386];
	if(rpJokes) {
		cosmicMons.push(179, 180, 181);
	};
	if ((cosmicMons.indexOf(R) !== -1) && (pvalue % 3 == 0)) { prefix = "Cosmic"; }

	// Day of the week prefixes
    var tuesdaymons = [479]; /* Rotom */
    if (tuesdaymons.indexOf(R) !== -1) { 
		now = new Date();
		if (now.getDay() == 2) prefix= "Tuesday";  
	}
	
	var fridaymons = [131, 425, 518]; /* Lapras, Drifloon, Musharna */
    if (fridaymons.indexOf(R) !== -1) { 
		now = new Date();
		if (now.getDay() == 5) prefix= "Friday";  
	}
    var thursdaymons = [354, 628, 630]; /* Banette, Braviary, Mandibuzz */
    if (thursdaymons.indexOf(R) !== -1) { 
		now = new Date();
		if (now.getDay() == 4) prefix= "Thursday";  
	}
    
    var jellicentdaymons = [593]; /* Jellicent */
    if (jellicentdaymons.indexOf(R) !== -1) {
		now = new Date();
		if (gvalue >= 5 && now.getDay() == 1) prefix = "Monday";
		if (gvalue <= 4 && now.getDay() == 4) prefix = "Thursday";
	}

	// Pokérus
	if (haspokerus >= 10 && haspokerus <= 19) {suffix = suffix + "_with_Pokérus"; }

    // Special Cases for Names:
    // Note: from this point onwards changing conditionals to use the Pokémon number instead 
    // of the name, so that i18n'd names can be picked up for transformation
    // (eg.: French!Red!Basculin).
    // Please sort conditionals by 'dex number for ease of use if possible, thanks.

	// Prefix foolery.
	if (R == 16 && prefix == "Wild") { prefix = "Shiny"; } // "it's just a Shiny Pidgey, I don't need it, so I'll just quickly flee"

	if (R == 19 && level > 95) { prefix= "Top_Percentage"; }
    if (R == 19 && level < 5) { prefix= "Bottom_Percentage"; }

    if (R == 130 /* Gyarados */ && (pvalue % 3 == 0)) { prefix= "Red"; }

	if (R == 241 /* Miltank */ && (pvalue % 3 == 0)) { 
		prefix = "Whitney's";
	}
	
	if (isshiny == 1 && pokemon != "Pidgey" && pokemon != "Gyarados") { prefix = prefix + "_Shiny"; }
	if (pokemon == "Pidgey" && isshiny == 1) { prefix = "True_Shiny"; }
	if (pokemon == "Gyarados" && isshiny == 1) { prefix = "Legitimately_Red"; }
	if (prefix == "Pink_Shiny") { prefix = "Wild_Shiny";} // Contradictory coloration
	
	// Mega Evolutions.
	if ((R == 3 || R == 6 || R == 9 || R == 15 || R == 18 || R == 65 || R == 80 || R == 94 || R == 115 || R == 127 || R == 130 || R == 142 || R == 150 
		|| R == 181 || R == 208 || R == 212 || R == 214 || R == 229 || R == 248 || R == 254 || R == 257 || R == 260 || R == 282 || R == 302 
		|| R == 303 || R == 306 || R == 308 || R == 310 || R == 319 || R == 323 || R == 334 || R == 354 || R == 359 || R == 362 || R == 373 
		|| R == 376 || R == 380 || R == 381 || R == 382 || R == 383 || R == 384 || R == 428 || R == 445 || R == 448 || R == 460 || R == 475 
		|| R == 531 || R == 719) 
		&& (ismega == 1 || ismega == 2)) {
		if (R != 382 && R != 383 /* Default case */) {
			pokemon = "Mega_" + pokemon;}
		if (R == 382 || R == 383 /*Kyogre and Groudon special case*/) {
			pokemon = "Primal_" + pokemon;}
		if ((R == 6 || R == 150) /* Charizard and Mewtwo extension */ && ismega == 1) {
			pokemon = pokemon + "_X";}
		else if ((R == 6 || R == 150) && ismega == 2) {
			pokemon = pokemon + "_Y";}
	}
	
	// Name changing.
	if (R == 25 /* Pikachu */) {
		var pika = pvalue % 6;
		if(pika == 3) {pokemon = "Flying_" + pokemon }
		else if(pika == 4) {pokemon = "Surfing_" + pokemon}
		else if(pika == 5) {
			pokemon = "Cosplay_" + pokemon;
			var cosplay = Speeqe.random(6);
			if(cosplay == 1) {pokemon = pokemon + "_(Rock Star)"}
			if(cosplay == 2) {pokemon = pokemon + "_(Belle)"}
			if(cosplay == 3) {pokemon = pokemon + "_(Pop Star)"}
			if(cosplay == 4) {pokemon = pokemon + "_(Ph. D.)"}
			if(cosplay == 5) {pokemon = pokemon + "_(Libre)"}
		}
	}
	
	if (R == 172 /* Pichu */) {
		var pich = pvalue % 5;
		if(pich == 3) {pokemon = "Notch-Eared_" + pokemon }
		else if(pich == 4) {pokemon = "Ukelele_" + pokemon}
	}
	
	if ((R == 183 || R == 184 /* Marill and Azumarill */) && (gvalue == 5 || gvalue == 6)) { 
		pokemon = "Formerly_Female_" + pokemon; 
	}
	
	if (R == 201 /* Unown */ ) {
		var Rl = pvalue % 28;
		if(Rl == 26) {
			Rl = "_?";
		} else if(Rl == 27) {
			Rl = "_!";
		} else {
			Rl = "_" + String.fromCharCode( 64 + Rl );
		}
		pokemon = pokemon + Rl;
	}

    if((R == 243 /* Raikou */ ) && (pvalue % 4 == 0)) {
		pokemon = "Inescapable_" + pokemon;
    }

    if((R == 244 /* Entei */ ) && (pvalue % 4 == 0)) { 
        pokemon = pokemon + "_[SLP]"; /* …Awkward Zombie comic? */
    }

    if (R == 292 /* Shedinja */) {
        var invincible = pvalue % 4;
        if(invincible == 2) {pokemon = "Sturdy_" + pokemon; }
    }

	if (R == 351 /* Castform */) {
		var form = pvalue % 4;
		if(form == 1) { pokemon = "Sunny_" + pokemon }
		else if(form == 2) { pokemon = "Rainy_" + pokemon }
		else if(form == 3) { pokemon = "Snowy_" + pokemon }
	}

    if (R == 352 /* Kecleon */  && (pvalue % 4 == 0) && (prefix != "Pink")) { 
        pokemon = "Purple_" + pokemon; 
    }
    
	if (R == 386 /* Deoxys */) {
	    var dform = pvalue % 4;
	    if (dform == 1) { pokemon = pokemon + "_A"; }
	    else if (dform == 2) { pokemon = pokemon + "_D"; }
	    else if (dform == 3) { pokemon = pokemon + "_S"; }
	}
	
	if (R == 412 || R == 413 /* Burmy and Wormadam */) {
		var cloak = pvalue % 3;
		if (cloak == 0) { pokemon = "Plant_Cloak_" + pokemon; }
		else if (cloak == 1) { pokemon = "Sand_Cloak_" + pokemon; }
		else { pokemon = "Trash_Cloak_" + pokemon; }
	}

	if (R == 421 /* Cherrim */ && (pvalue % 5 > 2)) { 
		pokemon= "Sunshine_" + pokemon; 
	}

	if (R == 422 || R == 423 /* Shellos line */) {
	    var sea = pvalue % 2;
	    if (sea == 0) { pokemon = "East_Sea_" + pokemon; }
	    else { pokemon = "West_Sea_" + pokemon; }
	}
	
	//    no longer works, maybe add Gen IV mode later
	//    if (R == 442 /* Spiritomb*/ ) {
	//        var ability = pvalue % 3;
	//        if (ability == 2) {pokemon = "Wondertomb";}
	//    }

    if (R == 479 /* Rotom */) {
        var names= ["$1", "Heat_$1", "Wash_$1", "Frost_$1", "Fan_$1", "Mow_$1" ];
        if(rpJokes) names.push("$1-Z");
        var form = pvalue % names.length;
        pokemon= names[form].replace("$1", pokemon);
    }

	if (R ==483 /* Dialga */ && (pvalue % 10 >= 7)) { 
		pokemon = "Primal_" + pokemon; 
	}
	
	if (R == 487 /* Giratina */ && (pvalue % 5 > 3)) { 
		pokemon= "Origin_" + pokemon; 
	}
	
	if (R == 492 /* Shaymin */ && (pvalue % 5 > 3)) {
		pokemon= "Skymin"; 
		//Change to "Sky_"?
	}
	
    if (R == 493 /* He Who Uses Plates */ ) {
        var plate = pvalue % 19;
        var names= 
        [ "Stone_$1", "Splash_$1", "Zap_$1", "Meadow_$1", "Toxic_$1", "Mind_$1", "Flame_$1", "Earth_$1", "Sky_$1"
        , "Insect_$1", "Spooky_$1", "Fist_$1", "Iron_$1", "Icicle_$1", "Draco_$1", "Pixie_$1", "Dread_$1", "???_$1"
        ];
        pokemon = names[plate].replace("$1", pokemon);
    }

	if (R == 550 /* Basculin */) {
	    var basscolor = pvalue % 2;
	    if (basscolor == 1) { pokemon = pokemon + "_Red"; }
	    else { pokemon = pokemon + "_Blue"; }
	}
	
    if (R == 555 /* Darmanitan*/ ) {
        var zen = pvalue % 2;
        if(zen == 1) {pokemon = "Zen_Mode_" + pokemon;}
    }
    
    if (rpJokes && R == 563 /* Cofagrigus */ ) {
        if (pvalue % 5 == 4) pokemon= "Urnagrigus";
    }

	if (R == 570 || R == 571 /* Zorua line */) {
		var illusion = Speeqe.NAMES[pvalue % Speeqe.NAMES.length][0][0];
		if(illusion != pokemon) {
			pokemon = illusion + "!" + pokemon;
		}
	}
	
    if (R == 585 || R == 586 /* Deerling Line */ ) {
        var season = pvalue % 4;
        if (season == 1) {pokemon = "Spring_" + pokemon; }
        else if (season == 2) {pokemon = "Summer_" + pokemon;}
        else if (season == 3) {pokemon = "Autumn_" + pokemon;}
        else {pokemon = "Winter_" + pokemon;}
    }

	if (R == 641 || R == 642 || R == 645 /* Kami Trio */) {
		var therian = pvalue % 2;
		if(therian == 1) {pokemon = "Therian_" + pokemon;}
	}

	if (R == 646 /* Reshiram and Zekrom were feeling sick, so I had to KYUREM! */) {
		var form = pvalue % 3;
		if(form == 1) {pokemon = "Black_" + pokemon;}
		else if(form == 2) {pokemon = "White_" + pokemon;}
	}

	if (R == 647 /* Keldeo */) {
		var sword = pvalue % 2;
		if(sword == 1) {pokemon = "Resolute_" + pokemon;}
	}

	if (R == 648 /* Meloetta */) {
		var relic = pvalue % 2;
		if(relic == 0) {pokemon = "Aria_" + pokemon;}
		if(relic == 1) {pokemon = "Pirouette_" + pokemon;}
	}

	if (R == 649 /* Genesect */){
		var drive = pvalue % 5;
		if(drive == 1) {pokemon = "Shock_" + pokemon;}
		else if(drive == 2) {pokemon = "Burn_" + pokemon;}
		else if(drive == 3) {pokemon = "Chill_" + pokemon;}
		else if(drive == 4) {pokemon = "Douse_" + pokemon;}
	}
	
	if(R == 666 /* Satan Bug and its many disguises */) {
        var region = pvalue % 20;
        var names= ["Archipelago_$1", "Continental_$1", "Elegant_$1", "Garden_$1", "High_Plains_$1", "Icy_Snow_$1", "Jungle_$1", 
					"Marine_$1", "Meadow_$1", "Modern_$1", "Monsoon_$1", "Ocean_$1", "Polar_$1", "River_$1", "Sandstorm_$1", 
					"Savanna_$1", "Sun_$1", "Tundra_$1", "Fancy_$1", "Pokéball_$1" ];
        pokemon = names[region].replace("$1", pokemon);
    }
	
	if (R == 669 || R == 671 /* Flabébé and Florges */) {
		var flower = pvalue % 5;
		if(flower == 0) {pokemon = "Red_Flower_" + pokemon;}
		else if(flower == 1) {pokemon = "Yellow_Flower_" + pokemon;}
		else if(flower == 2) {pokemon = "Orange_Flower_" + pokemon;}
		else if(flower == 3) {pokemon = "Blue_Flower_" + pokemon;}
		else {pokemon = "White_Flower_" + pokemon;}
	}
	
	if (R == 670 /* Floette */) {
		var flower = pvalue % 6;
		if(flower == 0) {pokemon = "Red_Flower_" + pokemon;}
		else if(flower == 1) {pokemon = "Yellow_Flower_" + pokemon;}
		else if(flower == 2) {pokemon = "Orange_Flower_" + pokemon;}
		else if(flower == 3) {pokemon = "Blue_Flower_" + pokemon;}
		else if(flower == 4) {pokemon = "White_Flower_" + pokemon;}
		else {pokemon = "AZ's_" + pokemon;} // Ancient giant hobos
	}
	
	if(R == 676 /* Furfrou */) {
        var names= ["Heart_Trim_$1", "Star_Trim_$1", "Diamond_Trim_$1", "Deputante_Trim_$1", "Matron_Trim_$1", "Dandy_Trim_$1", 
					"La_Reine_Trim_$1", "Kabuki_Trim_$1", "Pharaoh_Trim_$1" ];
        var trim = pvalue % 14; // 5/14 chance of being regular, 1/14 chance individually for each of the 9 trims
        if(trim < name.length) {
        	pokemon= names[trim].replace("$1", pokemon);
        }
    }
	
	if (R == 681 /* Aegislash */) {
		var stance = pvalue % 2;
		if(stance == 0) {pokemon = "Blade_" + pokemon;}
		else {pokemon = "Shield_" + pokemon;}
	}
	
	if (R == 710 || R == 711 /* Pumpkaboo line */) {
		var size = pvalue % 4;
		if(size == 1) {pokemon = "Small_" + pokemon;}
		else if(size == 2) {pokemon = "Large_" + pokemon;}
		else if(size == 3) {pokemon = "Super_" + pokemon;}
	}

	if (R == 720 /* Hoopa */) {
		var bottle = pvalue %3;
		if(bottle == 0) {pokemon = pokemon + "_Unbound";}
	}
	
	if (pokemon == "Missingno.") {
		var glitchylevel = pvalue % 2;
		if (glitchylevel == 1) { level = String.fromCharCode(32 + (level%17)); }
		else { level = 180 };
	}

	// Delta Species assignment
	if (weird == 4) { pokemon= pokemon + "δ"; }

    // Gender assignment
	if ( ratio != -1 ) {
		var guess= gvalue; // [1..8]
		if (guess <= ratio) {
			gender= "♀";
		} else { 
			gender= "♂";
		}
	}

	// Special Cases for Levels/Prefixes:
	if (prefix == "Imaginary" || prefix == "Imaginary_Shiny" ) { level= level+"i"; }
	if (prefix == "Omnipotent?" || prefix == "Omnipotent?_Shiny" ) { level= "∞"; }
	if (prefix == "Complex" || prefix == "Complex_Shiny") { level= level+"+"+((pvalue >> 48) % 100)+"i"; }

	if(prefix == "Plushie") {
		prefix = pokemon;
		pokemon = "Plushie";
	}

	if(prefix == "Toy") {
		prefix = pokemon;
		pokemon = "Toy";
	}

	if(prefix == "Plushie_Shiny") {
		prefix = "Shiny_" + pokemon;
		pokemon = "Plushie";
	}

	if(prefix == "Toy_Shiny") {
		prefix = "Shiny_" + pokemon;
		pokemon = "Toy";
	}


	// this should result in eg.: "Wild_Bulbasaur♂_(lv15)"
	// special case results are eg.:
	// "Wild_Skymin_(lv38)"
	// or "Top_Percentage_Rattata♀_(lv98)"
	var username = prefix+"_"+pokemon+gender+suffix+"_(lv"+level+")";
	return username;

};
