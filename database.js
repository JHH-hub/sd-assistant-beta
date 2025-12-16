
// ==========================================
// database.js - Auto-generated Wrapper Start
// ==========================================
(function() {

// 自动生成的数据文件 (已清洗)
const characterData = [
  {
    "group": "原神",
    "name": "申鹤",
    "prompt": "shenhe \\(genshin impact\\), genshin impact, 1girl, blue eyes, hair over one eye, very long hair, grey hair, white hair, long hair, braided ponytail, hair ornament, breast curtain, thighs, hip vent, covered navel, black bodysuit, black gloves"
  },
  {
    "group": "原神",
    "name": "申鹤",
    "prompt": "shenhe \\(frostflower dew) (genshin impact\\), genshin impact, 1girl, blue eyes, hair over one eye, white hair, very long hair, grey hair, hair ornament, thighs, china dress, black dress, sleeveless dress, detached sleeves, bare shoulders, long sleeves"
  },
  {
    "group": "原神",
    "name": "雷电将军",
    "prompt": "raiden shogun, genshin impact, 1girl, purple eyes, mole under eye, purple hair, long hair, very long hair, braided ponytail, hair ornament, thighs, purple kimono, purple nails, obi, bridal gauntlets"
  },
  {
    "group": "原神",
    "name": "雷电将军(人偶)",
    "prompt": "raiden shogun \\(magatsu mitake narukami no mikoto\\), genshin impact, 1girl, purple eyes, mole under eye, purple hair, long hair, very long hair, hair ornament, thighs, purple leotard, shoulder armor, mitsudomoe (shape), doll joints"
  },
  {
    "group": "原神",
    "name": "甘雨",
    "prompt": "ganyu \\(genshin impact\\), genshin impact, 1girl, goat horns, horns, purple eyes, hair between eyes, blue hair, long hair, ahoge, sidelocks, medium breasts, thighs, black gloves, bare shoulders, detached sleeves, neck bell, bodystocking"
  },
  {
    "group": "原神",
    "name": "甘雨（联名）",
    "prompt": "ganyu \\(china merchants bank) (genshin impact\\), genshin impact, 1girl, horns, goat horns, purple eyes, red-framed eyewear, glasses, semi-rimless eyewear, blue hair, long hair, ahoge, sidelocks, medium breasts, black shirt, white skirt, high-waist skirt, shirt tucked in, frilled shirt, long sleeves, frilled sleeves, turtleneck, black bow"
  },
  {
    "group": "原神",
    "name": "甘雨（联名）",
    "prompt": "ganyu \\(heytea) (genshin impact\\), genshin impact, 1girl, goat horns, horns, purple eyes, hair between eyes, blue hair, long hair, very long hair, ahoge, sidelocks, low ponytail, medium breasts, black skirt, white dress, see-through sleeves, neck bell, disposable cup"
  },
  {
    "group": "原神",
    "name": "甘雨（皮肤）",
    "prompt": "ganyu \\(twilight blossom) (genshin impact\\), genshin impact, 1girl, goat horns, purple eyes, blue hair, long hair, official alternate hairstyle, ahoge, sidelocks, medium breasts, thighs, blue dress, black gloves, sleeveless dress, black dress, bare shoulders, detached sleeves, long sleeves"
  },
  {
    "group": "原神",
    "name": "纳西妲",
    "prompt": "nahida \\(genshin impact\\), genshin impact, 1girl, loli, pointy ears, green eyes, hair between eyes, cross-shaped pupils, symbol-shaped pupils, long hair, white hair, green hair, gradient hair, grey hair, leaf hair ornament, side ponytail, sidelocks, hair ornament, white dress, detached sleeves, toes"
  },
  {
    "group": "原神",
    "name": "胡桃",
    "prompt": "hu tao \\(genshin impact\\), genshin impact, 1girl, red eyes, hair between eyes, flower-shaped pupils, brown hair, very long hair, long hair, twintails, thighs, hat flower, black headwear, long sleeves, black nails, nail polish, ghost"
  },
  {
    "group": "原神",
    "name": "胡桃（皮肤）",
    "prompt": "hu tao \\(lawson) (genshin impact\\), genshin impact, 1girl, red eyes, hair between eyes, flower-shaped pupils, unworn eyewear, eyewear hang, brown hair, very long hair, long hair, blue hairband, twintails, sidelocks, blue jacket, blue skirt, open jacket, pleated skirt, sunglasses, white shirt, black pantyhose, off-shoulder shirt, long sleeves, black nails, nail polish, ghost"
  },
  {
    "group": "原神",
    "name": "宵宫",
    "prompt": "yoimiya \\(genshin impact\\), genshin impact, 1girl, yellow eyes, hair between eyes, orange eyes, blonde hair, long hair, ponytail, hair ornament, medium breasts, chest tattoo, chest sarashi, bandaged leg, thighs, arm tattoo, orange kimono, red choker, bandaged arm, obi, hadanugi dousa, shimenawa"
  },
  {
    "group": "原神",
    "name": "八重神子",
    "prompt": "yae miko, genshin impact, 1girl, fox ears, floppy ears, purple eyes, hair between eyes, pink hair, very long hair, long hair, hair ornament, thighs, japanese clothes, bare shoulders, detached sleeves, wide sleeves, earrings, nontraditional miko"
  },
  {
    "group": "原神",
    "name": "荧",
    "prompt": "lumine \\(genshin impact\\), genshin impact, 1girl, yellow eyes, hair between eyes, blonde hair, short hair with long locks, sidelocks, hair flower, medium breasts, white dress, bare shoulders"
  },
  {
    "group": "原神",
    "name": "刻晴",
    "prompt": "keqing \\(genshin impact\\), genshin impact, 1girl, purple eyes, purple hair, cone hair bun, long hair, twintails, double bun, braid, hair ornament, medium breasts, black pantyhose, bare shoulders"
  },
  {
    "group": "原神",
    "name": "刻晴（皮肤）",
    "prompt": "keqing \\(lantern rite) (genshin impact\\), genshin impact, 1girl, purple eyes, hair between eyes, purple hair, cone hair bun, long hair, twintails, double bun, braid, hair bow, hair flower, purple sweater, white skirt, plaid scarf, long sleeves, bare shoulders"
  },
  {
    "group": "原神",
    "name": "刻晴（皮肤）",
    "prompt": "keqing \\(opulent splendor) (genshin impact\\), genshin impact, 1girl, purple eyes, purple hair, cone hair bun, long hair, twintails, double bun, hair ornament, hair ribbon, medium breasts, black dress, strapless dress, black pantyhose, bare shoulders"
  },
  {
    "group": "原神",
    "name": "妮露",
    "prompt": "nilou \\(genshin impact\\), genshin impact, 1girl, fake horns, aqua eyes, blue eyes, red hair, long hair, very long hair, parted bangs, low twintails, sidelocks, medium breasts, thighs, navel, harem outfit, veil, white veil, white headwear, blue skirt, detached sleeves, puffy long sleeves, bare shoulders, neck ring, circlet, stomach, brooch, crop top, bracer"
  },
  {
    "group": "原神",
    "name": "妮露（皮肤）",
    "prompt": "nilou \\(breeze of sabaa) (genshin impact\\), genshin impact, 1girl, aqua eyes, red hair, very long hair, parted bangs, double bun, hair flower, medium breasts, white dress, sleeveless dress, detached sleeves, bare shoulders, white sleeves, circlet"
  },
  {
    "group": "原神",
    "name": "莫娜",
    "prompt": "mona \\(genshin impact\\), genshin impact, 1girl, green eyes, black hair, long hair, purple hair, twintails, medium breasts, thighs, witch hat, black gloves, black pantyhose, blue leotard"
  },
  {
    "group": "原神",
    "name": "莫娜（new）",
    "prompt": "mona \\(pact of stars and moon) (genshin impact\\), genshin impact, 1girl, green eyes, hair between eyes, blue eyes, long hair, black hair, purple hair, twintails, medium breasts, small breasts, witch hat, black gloves, blue headwear, detached sleeves, fur collar, long sleeves"
  },
  {
    "group": "原神",
    "name": "神里绫华",
    "prompt": "kamisato ayaka, genshin impact, 1girl, blue eyes, mole under eye, long hair, light blue hair, blue hair, blunt bangs, ponytail, sidelocks, hair ornament, medium breasts, tress ribbon"
  },
  {
    "group": "原神",
    "name": "神里绫华（皮肤）",
    "prompt": "kamisato ayaka \\(springbloom missive\\), genshin impact, 1girl, blue eyes, mole under eye, official alternate hairstyle, light blue hair, butterfly hair ornament, blunt bangs, braid, hair flower, medium breasts, blue dress, brown headwear, multicolored dress, puffy long sleeves, white collar, blunt tresses"
  },
  {
    "group": "原神",
    "name": "神里绫华（皮肤）",
    "prompt": "kamisato ayaka \\(heytea\\), genshin impact, 1girl, blue eyes, mole under eye, long hair, white hair, light blue hair, very long hair, ponytail, blunt bangs, sidelocks, high ponytail, hair bow, medium breasts, serafuku, white shirt, pleated skirt, blue skirt, long sleeves, white sailor collar, tress ribbon, school bag, blunt tresses, blue neckerchief"
  },
  {
    "group": "原神",
    "name": "温迪",
    "prompt": "venti \\(genshin impact\\), genshin impact, 1boy, green eyes, black hair, gradient hair, blue hair, short hair with long locks, twin braids, hair flower, green headwear, white shirt, hat flower, collared cape, long sleeves, frilled sleeves, beret"
  },
  {
    "group": "原神",
    "name": "温迪（god）",
    "prompt": "venti \\(archon) (genshin impact\\), genshin impact, 1boy, green eyes, blue eyes, black hair, gradient hair, blue hair, short hair with long locks, twin braids, hair flower, chest tattoo, leg tattoo, navel, hooded capelet, white shorts, elbow gloves, white thighhighs, hood down, feathered wings, white wings, crop top, midriff, bridal gauntlets"
  },
  {
    "group": "原神",
    "name": "安柏",
    "prompt": "amber \\(genshin impact\\), genshin impact, 1girl, hair between eyes, brown eyes, brown hair, long hair, crossed bangs, hair ribbon, medium breasts, thighs, short shorts, red ribbon, long sleeves"
  },
  {
    "group": "原神",
    "name": "芭芭拉",
    "prompt": "barbara \\(genshin impact\\), genshin impact, 1girl, blue eyes, hair between eyes, blonde hair, long hair, twintails, medium breasts, hat, white dress, white headwear, bare shoulders, long sleeves, detached sleeves, twin drills"
  },
  {
    "group": "原神",
    "name": "芭芭拉（皮肤）",
    "prompt": "barbara \\(summertime sparkle) (genshin impact\\), genshin impact, 1girl, blue eyes, hair between eyes, blonde hair, long hair, twintails, hair flower, thighs, thigh strap, sailor hat, casual one-piece swimsuit, blue one-piece swimsuit, white headwear, detached sleeves, long sleeves, bare shoulders, blue sailor collar, bowtie, blue choker, bag, twin drills, duck"
  },
  {
    "group": "原神",
    "name": "菲谢尔",
    "prompt": "fischl \\(genshin impact\\), genshin impact, 1girl, green eyes, hair over one eye, eyepatch, blonde hair, long hair, two side up, hair ribbon, medium breasts, small breasts, bare shoulders"
  },
  {
    "group": "原神",
    "name": "菲谢尔（皮肤）",
    "prompt": "fischl \\(ein immernachtstraum) (genshin impact\\), genshin impact, 1girl, red eyes, hair over one eye, eyepatch, blonde hair, long hair, hair ribbon, purple dress, white thighhighs, bare shoulders, detached sleeves, long sleeves, tiara"
  },
  {
    "group": "原神",
    "name": "琴",
    "prompt": "jean \\(gunnhildr's legacy) (genshin impact\\), genshin impact, 1girl, blue eyes, hair between eyes, blonde hair, long hair, ponytail, sidelocks, hair bow, medium breasts, blue capelet, black gloves, white pants, black shirt, black bow, detached sleeves"
  },
  {
    "group": "原神",
    "name": "琴（皮肤）",
    "prompt": "jean \\(genshin impact\\), genshin impact, 1girl, blue eyes, hair between eyes, blonde hair, long hair, ponytail, sidelocks, hair bow, medium breasts, thighs, bare shoulders, detached sleeves"
  },
  {
    "group": "原神",
    "name": "琴（皮肤）",
    "prompt": "jean \\(sea breeze dandelion) (genshin impact\\), genshin impact, 1girl, blue eyes, hair between eyes, blonde hair, long hair, ponytail, sidelocks, hair bow, medium breasts, thighs, white shorts, blue shirt, high-waist shorts, bare shoulders, detached sleeves"
  },
  {
    "group": "原神",
    "name": "丽莎",
    "prompt": "lisa \\(genshin impact\\), genshin impact, 1girl, green eyes, hair between eyes, brown hair, long hair, hair flower, thighs, witch hat, purple headwear, black gloves, black thighhighs, witch"
  },
  {
    "group": "原神",
    "name": "丽莎（皮肤）",
    "prompt": "lisa \\(a sobriquet under shade) (genshin impact\\), genshin impact, 1girl, green eyes, hair between eyes, brown hair, long hair, medium hair, twin braids, hair flower, medium breasts, thighs, green headwear, puffy long sleeves, vision (genshin impact), necklace, neck ring, beret, thighlet, green hat"
  },
  {
    "group": "原神",
    "name": "凝光",
    "prompt": "ningguang \\(genshin impact\\), genshin impact, 1girl, red eyes, white hair, very long hair, long hair, parted bangs, sidelocks, hair stick, thighs, china dress, elbow gloves, black gloves, bare shoulders, tassel, hairpin"
  },
  {
    "group": "原神",
    "name": "凝光（皮肤）",
    "prompt": "ningguang \\(orchid's evening gown) (genshin impact\\), genshin impact, 1girl, red eyes, white hair, very long hair, long hair, tassel hair ornament, parted bangs, sidelocks, thighs, blue dress, bare shoulders, vision (genshin impact), bracelet"
  },
  {
    "group": "原神",
    "name": "砂糖",
    "prompt": "sucrose \\(genshin impact\\), genshin impact, 1girl, cat ears, animal ears, orange eyes, hair between eyes, yellow eyes, glasses, semi-rimless eyewear, green hair, long hair, streaked hair, multicolored hair, ponytail, medium breasts, white gloves, black thighhighs, long sleeves, vision (genshin impact), beret"
  },
  {
    "group": "原神",
    "name": "香菱",
    "prompt": "xiangling \\(genshin impact\\), genshin impact, 1girl, yellow eyes, thick eyebrows, short hair, blue hair, braided hair rings, braid, twin braids, hair rings, hairclip, small breasts, thighs, china dress, fingerless gloves, bare shoulders"
  },
  {
    "group": "原神",
    "name": "行秋",
    "prompt": "xingqiu \\(genshin impact\\), genshin impact, 1boy, yellow eyes, blue hair, short hair, chinese clothes, long sleeves, frilled sleeves, tassel earrings, single earring"
  },
  {
    "group": "原神",
    "name": "可莉",
    "prompt": "klee \\(genshin impact\\), genshin impact, 1girl, pointy ears, hair between eyes, red eyes, orange eyes, long hair, blonde hair, light brown hair, ahoge, low twintails, sidelocks, red headwear, cabbie hat, hat feather, brown gloves, long sleeves, clover print"
  },
  {
    "group": "原神",
    "name": "可莉（皮肤）",
    "prompt": "klee \\(blossoming starlight) (genshin impact\\), genshin impact, 1girl, pointy ears, red eyes, hair between eyes, blonde hair, long hair, ahoge, sidelocks, low twintails, hair ribbon, hair bow, witch hat, black gloves, white shirt, hat bow, red headwear, puffy short sleeves, red bowtie, vision (genshin impact)"
  },
  {
    "group": "原神",
    "name": "迪奥娜",
    "prompt": "diona \\(genshin impact\\), genshin impact, 1girl, cat girl, loli, cat ears, animal ear fluff, cat tail, green eyes, thick eyebrows, pink hair, short hair, bangs pinned back, navel, hat, detached sleeves, forehead"
  },
  {
    "group": "原神",
    "name": "烟绯",
    "prompt": "yanfei \\(genshin impact\\), genshin impact, 1girl, horns, green eyes, hair between eyes, pink hair, long hair, very long hair, small breasts, navel, red headwear, hat, detached sleeves, bare shoulders, long sleeves, antlers, midriff, crop top"
  },
  {
    "group": "原神",
    "name": "优菈",
    "prompt": "eula \\(genshin impact\\), genshin impact, 1girl, yellow eyes, purple eyes, hair between eyes, blue hair, medium hair, black hairband, hair ornament, medium breasts, thighs, long sleeves"
  },
  {
    "group": "原神",
    "name": "九条裟罗",
    "prompt": "kujou sara, genshin impact, 1girl, yellow eyes, short hair, black hair, japanese clothes, mask on head, bird mask, black gloves, detached sleeves"
  },
  {
    "group": "原神",
    "name": "珊瑚宫心海",
    "prompt": "sangonomiya kokomi, genshin impact, 1girl, purple eyes, blue eyes, pink hair, bow-shaped hair, gradient hair, long hair, blue hair, very long hair, blunt bangs, hair ornament, navel, white gloves, white thighhighs, bare shoulders, wide sleeves, fish, colored tips"
  },
  {
    "group": "原神",
    "name": "云堇",
    "prompt": "yun jin \\(genshin impact\\), genshin impact, 1girl, red eyes, long hair, black hair, purple hair, blunt bangs, pink capelet, long sleeves, tassel, vision (genshin impact), bonnet"
  },
  {
    "group": "原神",
    "name": "夜兰",
    "prompt": "yelan \\(genshin impact\\), genshin impact, 1girl, green eyes, short hair, blue hair, black hair, diagonal bangs, bob cut, mole on breast, thighs, armpits, bare shoulders, earrings"
  },
  {
    "group": "原神",
    "name": "久岐忍",
    "prompt": "kuki shinobu, genshin impact, 1girl, purple eyes, hair between eyes, green hair, ponytail, sidelocks, hair ornament, medium breasts, thighs, navel, purple jacket, short shorts, black shorts, ninja mask, cropped jacket, black gloves, black shirt, ninja, crop top, midriff, stomach"
  },
  {
    "group": "原神",
    "name": "柯莱",
    "prompt": "collei \\(genshin impact\\), genshin impact, 1girl, purple eyes, hair between eyes, green hair, medium hair, long hair, ahoge, crossed bangs, hair ornament, green capelet, detached sleeves"
  },
  {
    "group": "原神",
    "name": "多莉",
    "prompt": "dori \\(genshin impact\\), genshin impact, 1girl, yellow eyes, hair between eyes, red-tinted eyewear, pink hair, short hair with long locks, sidelocks, ahoge, navel, sunglasses, hat, purple headwear, purple pants, black shirt, detached sleeves, bare shoulders, long sleeves, white sleeves, vision (genshin impact), crop top, pince-nez, midriff"
  },
  {
    "group": "原神",
    "name": "坎蒂丝",
    "prompt": "candace \\(genshin impact\\), genshin impact, 1girl, dark-skinned female, heterochromia, yellow eyes, blue eyes, eye of horus, blue hair, short hair with long locks, long hair, purple hair, sidelocks, hair ornament, medium breasts, thighs, navel, bare shoulders, neck ring, stomach"
  },
  {
    "group": "原神",
    "name": "莱依拉",
    "prompt": "layla \\(genshin impact\\), genshin impact, 1girl, pointy ears, hair between eyes, yellow eyes, bags under eyes, white pupils, blue hair, very long hair, long hair, medium breasts, thighs, black gloves, bare shoulders, detached sleeves, blue hood, hood up, claw ring, neck ring, drill sidelocks, twin drills, thighlet"
  },
  {
    "group": "原神",
    "name": "法露珊",
    "prompt": "faruzan \\(genshin impact\\), genshin impact, 1girl, green eyes, symbol-shaped pupils, triangle-shaped pupils, aqua hair, long hair, x hair ornament, twintails, small breasts, white dress, bare shoulders, bracelet"
  },
  {
    "group": "原神",
    "name": "法露珊（皮肤）",
    "prompt": "faruzan \\(cafe) (genshin impact\\), genshin impact, 1girl, maid, maid headdress, maid apron, green eyes, triangle-shaped pupils, symbol-shaped pupils, aqua hair, long hair, x hair ornament, twintails, white apron, white thighhighs, puffy short sleeves, wrist cuffs, white wrist cuffs"
  },
  {
    "group": "原神",
    "name": "瑶瑶",
    "prompt": "yaoyao \\(genshin impact\\), genshin impact, 1girl, brown eyes, brown hair, bow-shaped hair, short hair, blunt bangs, braid, sidelocks, hair bell, chinese clothes, long sleeves, puffy long sleeves, backpack basket, jingle bell"
  },
  {
    "group": "原神",
    "name": "迪希雅",
    "prompt": "dehya \\(genshin impact\\), genshin impact, 1girl, dark-skinned female, hair ears, animal ears, blue eyes, hair between eyes, black hair, streaked hair, blonde hair, long hair, two-tone hair, brown hair, crossed bangs, hair intakes, thighs, navel, black gloves, bare shoulders, stomach, criss-cross halter"
  },
  {
    "group": "原神",
    "name": "绮良良",
    "prompt": "kirara \\(genshin impact\\), genshin impact, 1girl, cat girl, cat ears, cat tail, two tails, green eyes, long hair, blonde hair, light brown hair, brown hair, ahoge, hairclip, thighs, detached sleeves, bare shoulders, nekomata, crop top"
  },
  {
    "group": "原神",
    "name": "绮良良（皮肤）",
    "prompt": "kirara \\(phantom in boots) (genshin impact\\), genshin impact, 1girl, cat girl, hand up, cat tail, two tails, green eyes, blonde hair, very long hair, long hair, thigh boots, hat, brown gloves, white shirt, detached sleeves, long sleeves, single bare shoulder, black hat"
  },
  {
    "group": "原神",
    "name": "琳妮特",
    "prompt": "lynette \\(genshin impact\\), genshin impact, 1girl, cat girl, cat ears, cat tail, animal ear fluff, purple eyes, grey hair, long hair, medium breasts, star tattoo, black pantyhose, long sleeves, aqua bow, star facial mark"
  },
  {
    "group": "原神",
    "name": "林尼",
    "prompt": "lyney \\(genshin impact\\), genshin impact, 1boy, purple eyes, short hair, grey hair, blonde hair, teardrop tattoo, black gloves, top hat, black headwear, white shirt, long sleeves, detached sleeves, teardrop facial mark, facial mark"
  },
  {
    "group": "原神",
    "name": "弗雷明",
    "prompt": "freminet \\(genshin impact\\), genshin impact, 1boy, blue eyes, purple eyes, hair over one eye, blonde hair, short hair, freckles, black headwear, black gloves, fingerless gloves, black jacket, black shorts, long sleeves, beret, gold trim, black hat"
  },
  {
    "group": "原神",
    "name": "夏洛蒂",
    "prompt": "charlotte \\(genshin impact\\), genshin impact, 1girl, aqua eyes, green eyes, pink hair, short hair, medium hair, medium breasts, cabbie hat, white gloves, red headwear, white shirt, hat feather, bare shoulders, long sleeves, detached sleeves, red sleeves, monocle, red hat"
  },
  {
    "group": "原神",
    "name": "芙宁娜",
    "prompt": "furina \\(genshin impact\\), genshin impact, 1girl, heterochromia, blue eyes, hair between eyes, drop-shaped pupils, white hair, streaked hair, light blue hair, long hair, blue hair, ahoge, top hat, blue jacket, blue headwear, white gloves, long sleeves"
  },
  {
    "group": "原神",
    "name": "娜维娅",
    "prompt": "navia \\(genshin impact\\), genshin impact, 1girl, blue eyes, blonde hair, very long hair, long hair, thighs, black headwear, black gloves, hat flower, bare shoulders, detached sleeves, drill sidelocks"
  },
  {
    "group": "原神",
    "name": "仆人",
    "prompt": "arlecchino \\(genshin impact\\), genshin impact, 1girl, black eyes, hair between eyes, x-shaped pupils, red pupils, black hair, streaked hair, white hair, short hair, grey hair, two-tone hair, long hair"
  },
  {
    "group": "原神",
    "name": "仆人（皮肤）",
    "prompt": "arlecchino \\(cinder of two worlds' flames) (genshin impact\\), genshin impact, 1girl, hand up, black eyes, hair between eyes, x-shaped pupils, red pupils, streaked hair, black hair, white hair, grey hair, long hair, low ponytail, long sleeves"
  },
  {
    "group": "原神",
    "name": "水夜叉",
    "prompt": "bonanus \\(genshin impact\\), genshin impact, 1girl, horns, blue eyes, blue hair, long hair, parted bangs, collarbone, bare shoulders, forehead mark, claws, facial mark, forehead jewel"
  },
  {
    "group": "原神",
    "name": "夏沃蕾",
    "prompt": "chevreuse \\(genshin impact\\), genshin impact, 1girl, holding gun, mole under mouth, purple eyes, hair between eyes, white pupils, eyepatch, purple hair, very long hair, streaked hair, white hair, two-tone hair, pointy hair, crossed bangs, sidelocks, shako cap, white gloves, red dress, black headwear, two-tone dress, black dress, strapless dress, bare shoulders, puffy detached sleeves, detached collar, black necktie, earmuffs around neck, earmuffs, gold trim"
  },
  {
    "group": "原神",
    "name": "千织",
    "prompt": "chiori \\(genshin impact\\), genshin impact, 1girl, red eyes, brown hair, long hair, drill hair, blonde hair, drill ponytail, ponytail, side ponytail, hair stick, grey kimono, short kimono, black gloves, black pantyhose, yellow skirt, haori, obi"
  },
  {
    "group": "原神",
    "name": "茜特菈莉",
    "prompt": "citlali \\(genshin impact\\), genshin impact, 1girl, blue eyes, pink hair, very long hair, long hair, twin braids, braid, medium breasts, bare shoulders, forehead mark"
  },
  {
    "group": "原神",
    "name": "克洛琳德",
    "prompt": "clorinde \\(genshin impact\\), genshin impact, 1girl, purple eyes, hair between eyes, long hair, dark blue hair, blue hair, purple hair, very long hair, black hair, low ponytail, thighs, thigh strap, white gloves, white shirt, hat feather, blue headwear, black pantyhose, blue cape, black skirt, vision (genshin impact), tricorne, epaulettes, black corset"
  },
  {
    "group": "原神",
    "name": "闲云",
    "prompt": "cloud retainer \\(genshin impact\\), genshin impact, 1girl, aqua eyes, glasses, red-framed eyewear, semi-rimless eyewear, very long hair, colored inner hair, black hair, two-tone hair, green hair, aqua hair, blue hair, hair ornament, thighs, tassel earrings"
  },
  {
    "group": "原神",
    "name": "少女",
    "prompt": "columbina \\(genshin impact\\), genshin impact, 1girl, eye mask, black hair, two-tone hair, long hair, pink hair, streaked hair, red hair, gradient hair, purple hair, blunt bangs, white mask, fur-trimmed coat, head wings"
  },
  {
    "group": "原神",
    "name": "愚人众·火萤术士",
    "prompt": "crimson lotus moth \\(genshin impact\\), genshin impact, 1girl, eye mask, black hair, long hair, blonde hair, streaked hair, two-tone hair, fur-trimmed coat, bare shoulders, butterfly, fur trim"
  },
  {
    "group": "原神",
    "name": "愚人众·雷萤术士",
    "prompt": "cicin mage \\(genshin impact\\), genshin impact, 1girl, eye mask, short hair, green hair, hooded cloak, mask, long sleeves, hood up, fur-trimmed sleeves, bare shoulders, fur-trimmed hood, fur cuffs, gem, fur trim"
  },
  {
    "group": "原神",
    "name": "愚人众·冰萤术士",
    "prompt": "cryo cicin mage \\(genshin impact\\), genshin impact, 1girl, blue eyes, eye mask, short hair, light blue hair, white hair, collarbone, mask, fur-trimmed hood, long sleeves, fur-trimmed sleeves, hood up, diamond (gemstone)"
  },
  {
    "group": "原神",
    "name": "艾梅莉埃",
    "prompt": "emilie \\(genshin impact\\), genshin impact, 1girl, pink eyes, glasses, black-framed eyewear, semi-rimless eyewear, blonde hair, short hair, medium breasts, breast curtains, black gloves, hat, detached sleeves, bare shoulders, green hat"
  },
  {
    "group": "原神",
    "name": "芙宁娜（god)",
    "prompt": "focalors \\(genshin impact\\), genshin impact"
  },
  {
    "group": "原神",
    "name": "哈艮图斯(摩拉克斯wife)",
    "prompt": "guizhong \\(genshin impact\\), genshin impact, 1girl, blue eyes, grey hair, short hair with long locks, long hair, tassel hair ornament, sidelocks, thighs, white dress, bare shoulders, detached sleeves, sleeves past fingers, long sleeves, wide sleeves"
  },
  {
    "group": "原神",
    "name": "希娜小姐",
    "prompt": "hina \\(genshin impact\\), genshin impact, 1girl, dog girl, dog ears, dog tail, hair between eyes, green eyes, blue eyes, brown hair, white hair, streaked hair, long hair, very long hair, two-tone hair, hair ornament, green kimono, black gloves, bare shoulders, tassel, wide sleeves, detached sleeves"
  },
  {
    "group": "原神",
    "name": "卡齐娜",
    "prompt": "kachina \\(genshin impact\\), genshin impact, 1girl, animal ears, blue eyes, short eyebrows, thick eyebrows, very long hair, grey hair, blonde hair, long hair, brown hair, gradient hair, parted bangs, braid, sidelocks, high ponytail, ponytail, side braids, black shorts, hat, visor cap, jewelry, bare shoulders, bandana around neck, armlet, crop top, midriff, mittens, white mittens, fur trim, green bandana"
  },
  {
    "group": "原神",
    "name": "玛薇卡",
    "prompt": "mavuika \\(genshin impact\\), genshin impact, 1girl, orange eyes, symbol-shaped pupils, red hair, orange hair, very long hair, two-tone hair, ahoge, sunglasses, black gloves, earrings"
  },
  {
    "group": "原神",
    "name": "玛拉妮",
    "prompt": "mualani \\(genshin impact\\), genshin impact, 1girl, dark skin, red eyes, orange eyes, long hair, white hair, grey hair, light blue hair, blue hairband, low twin braids, braid, small breasts, thighs, navel, fingerless gloves, bare shoulders, midriff, stomach"
  },
  {
    "group": "原神",
    "name": "派蒙",
    "prompt": "paimon \\(genshin impact\\), genshin impact, 1girl, hair between eyes, blue eyes, white hair, short hair, hair ornament, halo, long sleeves"
  },
  {
    "group": "原神",
    "name": "诺艾尔",
    "prompt": "noelle \\(genshin impact\\), genshin impact, 1girl, maid, maid headdress, green eyes, short hair, grey hair, braid, blunt bangs, braided bangs, hair flower, medium breasts"
  },
  {
    "group": "原神",
    "name": "诺艾尔（皮肤）",
    "prompt": "noelle \\(kfc) (genshin impact\\), genshin impact, 1girl, green eyes, short hair, grey hair, braid, blunt bangs, braided bangs, medium breasts, fast food uniform, apron, employee uniform, black headwear, black dress, white apron, long sleeves, beret, red ascot, black hat"
  },
  {
    "group": "原神",
    "name": "七七",
    "prompt": "qiqi \\(genshin impact\\), genshin impact, 1girl, purple eyes, hair between eyes, purple hair, long hair, coin hair ornament, braided ponytail, single braid, hat, purple headwear, white thighhighs, long sleeves, wide sleeves, bead necklace, jiangshi, qingdai guanmao, ofuda"
  },
  {
    "group": "原神",
    "name": "大慈树王",
    "prompt": "rukkhadevata \\(genshin impact\\), genshin impact, 1girl, pointy ears, green eyes, hair between eyes, cross-shaped pupils, symbol-shaped pupils, white hair, green hair, very long hair, gradient hair, long hair, streaked hair, leaf hair ornament, ahoge, sidelocks, single braid, braid, white dress, strapless dress, bare shoulders, detached sleeves, gold trim"
  },
  {
    "group": "原神",
    "name": "木偶",
    "prompt": "sandrone \\(genshin impact\\), genshin impact, 1girl, blue eyes, short hair with long locks, brown hair, blonde hair, sidelocks, fur-trimmed coat, white gloves, headdress"
  },
  {
    "group": "原神",
    "name": "希格雯",
    "prompt": "sigewinne \\(genshin impact\\), genshin impact, 1girl, animal ears, red eyes, hair between eyes, eyelashes, blue hair, medium hair, gradient hair, purple hair, pom pom hair ornament, low twintails, sidelocks, crossed bangs, white gloves, nurse cap, white apron, red bowtie, puffy long sleeves, long sleeves, white hat"
  },
  {
    "group": "原神",
    "name": "夫人",
    "prompt": "signora \\(genshin impact\\), genshin impact, 1girl, blue eyes, one eye covered, blonde hair, long hair, elbow gloves, black mask, half mask, black gloves, bare shoulders, fur trim"
  },
  {
    "group": "原神",
    "name": "丝柯克",
    "prompt": "skirk \\(genshin impact\\), genshin impact, 1girl, pink eyes, hair between eyes, red eyes, grey hair, very long hair, long hair, butterfly hair ornament, medium breasts, thighs, bare shoulders, detached sleeves"
  },
  {
    "group": "鸣潮",
    "name": "漂泊者（主角）",
    "prompt": "female rover \\(c\\), wuthering waves, 1girl, yellow eyes, black hair, colored inner hair, long hair, two-tone hair, grey hair, low ponytail, hairclip, sideboob, black dress, black gloves, bare shoulders, eyeliner, red eyeliner"
  },
  {
    "group": "鸣潮",
    "name": "安可",
    "prompt": "encore \\(wuthering waves\\), wuthering waves, 1girl, purple eyes, hair between eyes, blue eyes, cross-shaped pupils, pink pupils, eyelashes, thick eyebrows, pink hair, long hair, ahoge, low twintails, hair intakes, sidelocks, hair bow, hair bobbles, hairclip, white dress, black dress, two-tone dress, pink skirt, short sleeves, pink bowtie, gold trim, white arm warmers, black arm warmers, arm warmers"
  },
  {
    "group": "鸣潮",
    "name": "长离",
    "prompt": "changli \\(wuthering waves\\), wuthering waves, 1girl, hair between eyes, yellow eyes, white pupils, pink hair, white hair, two-tone hair, very long hair, twin braids, ahoge, hair intakes, hair ornament, hair bow, thigh strap, white dress, black jacket, bare shoulders, black collar, halterneck, black bow, black sleeves, colored extremities, body markings"
  },
  {
    "group": "鸣潮",
    "name": "折枝",
    "prompt": "zhezhi \\(wuthering waves\\), wuthering waves, 1girl, pink eyes, blue eyes, two-tone eyes, pink pupils, glasses, semi-rimless eyewear, brown hair, streaked hair, long hair, pink hair, black hair, very long hair, twintails, two side up, medium breasts, aqua dress, bare shoulders, detached sleeves, earrings"
  },
  {
    "group": "鸣潮",
    "name": "今汐",
    "prompt": "jinhsi \\(wuthering waves\\), wuthering waves, 1girl, grey eyes, white pupils, white hair, very long hair, twintails, two side up, medium breasts, mole on cheek, black dress, white bow, earrings"
  },
  {
    "group": "鸣潮",
    "name": "吟霖",
    "prompt": "yinlin \\(wuthering waves\\), wuthering waves, 1girl, pointy ears, purple eyes, hair between eyes, white pupils, mole under eye, red hair, very long hair, black hairband, high ponytail, hair intakes, elbow gloves, black gloves, bare shoulders, earrings, hairpin"
  },
  {
    "group": "鸣潮",
    "name": "椿",
    "prompt": "camellya \\(wuthering waves\\), wuthering waves, 1girl, hair between eyes, blue eyes, black eyes, red pupils, white hair, streaked hair, black hair, short twintails, crossed bangs, hair flower, medium breasts, small breasts, navel, white dress, earrings"
  },
  {
    "group": "鸣潮",
    "name": "守岸人",
    "prompt": "the shorekeeper \\(wuthering waves\\), wuthering waves, 1girl, purple eyes, hair between eyes, purple pupils, blue hair, long hair, sidelocks, medium breasts, collarbone, white veil, white dress, blue veil, center opening, nail polish, blue butterfly"
  },
  {
    "group": "鸣潮",
    "name": "杨阳",
    "prompt": "yangyang \\(wuthering waves\\), wuthering waves, 1girl, grey eyes, black eyes, black hair, long hair, very long hair, feather hair, parted bangs, hair intakes, medium breasts, black gloves, bare shoulders, forehead mark, arm strap, single glove, blue hat"
  },
  {
    "group": "鸣潮",
    "name": "白芷",
    "prompt": "baizhi \\(wuthering waves\\), wuthering waves, 1girl, green eyes, black hair, long hair, streaked hair, very long hair, hair flower, thighs, black dress, black gloves, partially fingerless gloves, bare shoulders, detached sleeves"
  },
  {
    "group": "鸣潮",
    "name": "薇琳娜",
    "prompt": "verina \\(wuthering waves\\), wuthering waves, 1girl, upper teeth only, green eyes, eyelashes, blonde hair, very long hair, green hair, long hair, green hairband, twintails, sidelocks, collarbone, chinese clothes, green dress, white gloves, fingerless gloves, white shorts, green footwear, sleeveless dress, bare shoulders, green bow, green ribbon, black choker, flower earrings"
  },
  {
    "group": "鸣潮",
    "name": "丹瑾",
    "prompt": "danjin \\(wuthering waves\\), wuthering waves, 1girl, blue eyes, hair between eyes, red hair, short hair, ahoge, hair intakes, thigh strap, black gloves, shoulder cutout, hoop earrings"
  },
  {
    "group": "鸣潮",
    "name": "桃祁",
    "prompt": "taoqi \\(wuthering waves\\), wuthering waves, 1girl, purple eyes, pink eyes, hair over one eye, pink hair, medium hair, hair ornament, thighs, black gloves"
  },
  {
    "group": "鸣潮",
    "name": "散华",
    "prompt": "sanhua \\(wuthering waves\\), wuthering waves, 1girl, mole under mouth, red eyes, grey hair, short hair, white hair, black gloves, black skirt, black shirt, black pantyhose, bare shoulders, bead necklace, beret, crop top, black hat"
  },
  {
    "group": "鸣潮",
    "name": "赤霞",
    "prompt": "chixia \\(wuthering waves\\), wuthering waves, 1girl, red eyes, red hair, medium hair, two-tone hair, blue hair, bangs pinned back, sidelocks, side braid, braid, hair bow, medium breasts, chest sarashi, navel, freckles, collarbone, black gloves, shirt around waist, red shorts, red gloves, single sleeve, elbow sleeve, single bare shoulder, midriff, crop top"
  },
  {
    "group": "鸣潮",
    "name": "漂泊者（女）",
    "prompt": "female rover \\(wuthering waves\\), wuthering waves, 1girl, yellow eyes, black hair, colored inner hair, long hair, two-tone hair, grey hair, low ponytail, hairclip, sideboob, black dress, black gloves, bare shoulders, eyeliner, red eyeliner"
  },
  {
    "group": "星穹铁道",
    "name": "卡芙卡",
    "prompt": "kafka \\(honkai:star rail\\), honkai \\(series\\), 1girl, purple eyes, hair between eyes, eyewear on head, round eyewear, purple hair, long hair, sidelocks, thighs, sunglasses, white shirt, purple gloves, collared shirt, black jacket, black shorts, high-waist shorts, long sleeves, pince-nez"
  },
  {
    "group": "星穹铁道",
    "name": "银狼",
    "prompt": "silver wolf \\(honkai:star rail\\), honkai \\(series\\), 1girl, grey eyes, hair between eyes, eyewear on head, goggles on head, grey hair, long hair, drill hair, ponytail, crossed bangs, hair ribbon, thighs, thigh strap, navel, black jacket, fur-trimmed jacket, black gloves, white shirt, black shorts, fingerless gloves, crop top, midriff"
  },
  {
    "group": "星穹铁道",
    "name": "姬子",
    "prompt": "himeko \\(honkai:star rail\\), honkai \\(series\\), 1girl, yellow eyes, hair between eyes, red hair, long hair, very long hair, mole on breast, thighs, white dress, black gloves, bare shoulders, earrings, single glove"
  },
  {
    "group": "星穹铁道",
    "name": "主角（女）",
    "prompt": "stelle \\(honkai:star rail\\), honkai \\(series\\), 1girl, yellow eyes, hair between eyes, grey hair, long hair, medium hair, medium breasts, thighs, white shirt, black jacket, black gloves"
  },
  {
    "group": "星穹铁道",
    "name": "布洛妮娅",
    "prompt": "bronya zaychik, honkai \\(series\\), 1girl, grey eyes, hair between eyes, grey hair, long hair, drill hair, black gloves, bare shoulders, twin drills"
  },
  {
    "group": "星穹铁道",
    "name": "布洛妮娅",
    "prompt": "bronya zaychik \\(black nucleus\\), honkai \\(series\\), 1girl, red eyes, hair between eyes, grey hair, long hair, small breasts, black gloves, elbow gloves, black leotard, bare shoulders, twin drills"
  },
  {
    "group": "星穹铁道",
    "name": "三月七",
    "prompt": "march 7th \\(honkai:star rail\\), honkai \\(series\\), 1girl, blue eyes, pink eyes, two-tone eyes, hair between eyes, pink hair, medium hair, medium breasts, collarbone, white shirt, blue jacket, tied jacket, blue skirt, black gloves, long sleeves, black choker, single earring, buttons"
  },
  {
    "group": "星穹铁道",
    "name": "符玄",
    "prompt": "fu xuan \\(honkai:star rail\\), honkai \\(series\\), 1girl, yellow eyes, pink eyes, pink hair, bow-shaped hair, very long hair, long hair, parted bangs, low twintails, hair stick, hair rings, bare shoulders, detached sleeves, tassel, forehead jewel"
  },
  {
    "group": "星穹铁道",
    "name": "希儿",
    "prompt": "seele \\(honkai:star rail\\), honkai \\(series\\), 1girl, hair between eyes, purple eyes, blue eyes, purple hair, long hair, colored inner hair, blue hair, very long hair, ahoge, medium breasts, thighs, covered navel, purple scarf, black shorts, bare shoulders"
  },
  {
    "group": "星穹铁道",
    "name": "寂灭将军/阿格莱雅",
    "prompt": "acheron \\(honkai:star rail\\), honkai \\(series\\), 1girl, purple eyes, hair over one eye, purple hair, very long hair, long hair, streaked hair, hair ornament, thighs, leg tattoo, navel, black gloves, black shorts, white coat, black choker, single bare shoulder, bare shoulders, midriff, stomach"
  },
  {
    "group": "星穹铁道",
    "name": "流萤",
    "prompt": "firefly \\(honkai:star rail\\), honkai \\(series\\), 1girl, hair between eyes, purple eyes, grey hair, long hair, black hairband, hair intakes, white shirt, black jacket, long sleeves"
  },
  {
    "group": "星穹铁道",
    "name": "黑塔",
    "prompt": "herta \\(honkai:star rail\\), honkai \\(series\\), 1girl, purple eyes, brown hair, very long hair, long hair, hair intakes, hair flower, black headwear, white dress, hat flower, long sleeves, shoulder cutout, purple choker, key necklace, doll joints, beret, key, chain, lock, black hat"
  },
  {
    "group": "星穹铁道",
    "name": "藿藿",
    "prompt": "huohuo \\(honkai:star rail\\), honkai \\(series\\), 1girl, fox girl, fox ears, fox tail, green eyes, paw-shaped pupils, symbol-shaped pupils, green hair, long hair, yin yang hair ornament, ahoge, hair ornament, hat, long sleeves, bare shoulders, yin yang"
  },
  {
    "group": "星穹铁道",
    "name": "知更鸟",
    "prompt": "in \\rob(honkai:star rail\\), honkai \\(series\\), 1girl, hair between eyes, aqua eyes, green eyes, long hair, very long hair, blue hair, purple hair, white gloves, white dress, halo, bare shoulders, detached sleeves, short sleeves, head wings, white wings"
  },
  {
    "group": "星穹铁道",
    "name": "砂金",
    "prompt": "sparkle \\(honkai:star rail\\), honkai \\(series\\), 1girl, pink eyes, red eyes, black hair, very long hair, brown hair, long hair, twintails, medium breasts, thighs, mask on head, red dress, fox mask, black gloves, bare shoulders, black choker, detached sleeves, facial mark, neck bell, criss-cross halter, obi"
  },
  {
    "group": "星穹铁道",
    "name": "停云",
    "prompt": "tingyun \\(honkai:star rail\\), honkai \\(series\\), 1girl, fox girl, fox ears, fox tail, animal ear fluff, hair between eyes, green eyes, brown hair, long hair, ponytail, medium breasts, thighs, brown dress, bare shoulders, detached sleeves, bracelet"
  },
  {
    "group": "星穹铁道",
    "name": "云璃",
    "prompt": "yunli \\(honkai:star rail\\), honkai \\(series\\), 1girl, hair between eyes, yellow eyes, orange eyes, long hair, grey hair, low twintails, hairclip, chinese clothes, detached sleeves, bare shoulders, short sleeves, detached collar, headpiece, stomach"
  },
  {
    "group": "星穹铁道",
    "name": "白露",
    "prompt": "bailu \\(honkai:star rail\\), honkai:star rail, 1girl, dragon horns, dragon tail, pointy ears, hair between eyes, blue eyes, aqua eyes, purple hair, long hair, very long hair, blue hair, crossed bangs, ahoge, twin braids, hair tubes, detached sleeves, long sleeves, dragon girl"
  },
  {
    "group": "星穹铁道",
    "name": "克拉拉",
    "prompt": "clara \\(honkai:star rail\\), honkai:star rail, 1girl, red eyes, hair between eyes, pink eyes, white hair, long hair, grey hair, very long hair, sidelocks, hair intakes, feet, legs, barefoot, red jacket, red coat, long sleeves"
  },
  {
    "group": "星穹铁道",
    "name": "流萤（AR-26710 机体）",
    "prompt": "firefly \\(ar-26710) (honkai:star rail\\), honkai:star rail, 1girl, purple eyes, hair between eyes, two-tone eyes, grey hair, long hair, very long hair, white hair, black hairband, medium breasts, pilot suit, white bodysuit"
  },
  {
    "group": "星穹铁道",
    "name": "灵砂",
    "prompt": "lingsha \\(honkai:star rail\\), honkai:star rail, 1girl, pointy ears, orange eyes, red eyes, brown hair, long hair, very long hair, black hair, blunt bangs, ahoge, navel, bare shoulders, colored extremities"
  },
  {
    "group": "星穹铁道",
    "name": "三月七（巡猎形态）",
    "prompt": "march 7th \\(hunt) (honkai:star rail\\), honkai:star rail, 1girl, blue eyes, two-tone eyes, pink eyes, purple eyes, pink pupils, pink hair, official alternate hairstyle, medium hair, medium breasts, chinese clothes, black gloves, fingerless gloves, black dress, blue belt, jingle bell, hairpin, single earring"
  },
  {
    "group": "星穹铁道",
    "name": "阮·梅",
    "prompt": "ruan mei \\(honkai:star rail\\), honkai:star rail, 1girl, hair between eyes, aqua eyes, blue eyes, green eyes, black hair, long hair, brown hair, hair intakes, medium breasts, thighs, chinese clothes, aqua dress, blue gloves, bare shoulders, shoulder cutout, short sleeves, bead necklace"
  },
  {
    "group": "星穹铁道",
    "name": "驭空",
    "prompt": "yukong \\(honkai:star rail\\), honkai:star rail, 1girl, fox girl, fox ears, animal ear fluff, fox tail, purple eyes, hair between eyes, long hair, green hair, very long hair, blue hair, hair ornament, thighs, legs, bare shoulders"
  },
  {
    "group": "EVA",
    "name": "绫波丽",
    "prompt": "ayanami rei, neon genesis evangelion, 1girl, red eyes, hair between eyes, blue hair, short hair, medium breasts, plugsuit, white bodysuit"
  },
  {
    "group": "EVA",
    "name": "明日香·兰格雷",
    "prompt": "souryuu asuka langley, neon genesis evangelion, 1girl, blue eyes, hair between eyes, long hair, orange hair, brown hair, two side up, medium breasts, plugsuit, pilot suit, red bodysuit, interface headset"
  },
  {
    "group": "EVA",
    "name": "葛城美里",
    "prompt": "katsuragi misato, neon genesis evangelion, 1girl, brown eyes, long hair, purple hair, parted bangs, medium breasts"
  },
  {
    "group": "EVA",
    "name": "真希波·玛丽·伊兰崔亚斯",
    "prompt": "makinami mari illustrious, neon genesis evangelion, 1girl, blue eyes, glasses, red-framed eyewear, long hair, brown hair, twintails, hairband, medium breasts, plugsuit"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "芙莉莲",
    "prompt": "frieren, sousou no frieren, 1girl, green eyes, long hair, white hair, grey hair, twintails, parted bangs, white capelet, long sleeves, earrings, elf"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "费伦",
    "prompt": "fern \\(sousou no frieren\\), sousou no frieren, 1girl, purple eyes, purple hair, long hair, straight hair, blunt bangs, sidelocks, white dress, long sleeves"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "赛丽艾",
    "prompt": "serie \\(sousou no frieren\\), sousou no frieren, 1girl, yellow eyes, blonde hair, long hair, very long hair, sidelocks, hair tubes, feet, barefoot, elf"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "阿乌拉",
    "prompt": "aura \\(sousou no frieren\\), sousou no frieren, 1girl, demon horns, demon girl, blue eyes, purple hair, long hair, pink hair, low-braided long hair, low-tied long hair, multiple braids, medium breasts, navel cutout, navel, elbow gloves, black gloves, bare shoulders"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "莉涅",
    "prompt": "linie \\(sousou no frieren\\), sousou no frieren, 1girl, demon girl, demon horns, purple eyes, hair between eyes, pink hair, long hair, twintails, hair ribbon, brown dress, white shirt, cross-laced clothes, brown ribbon, black ribbon, neck ribbon, juliet sleeves, wide sleeves, long sleeves, battle axe, brown corset"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "赞泽",
    "prompt": "sense \\(sousou no frieren\\), sousou no frieren, 1girl, brown eyes, hair between eyes, hair over one eye, brown hair, absurdly long hair, very long hair, prehensile hair, blue capelet, white bow"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "辛美尔",
    "prompt": "himmel \\(sousou no frieren\\), sousou no frieren, 1boy, blue eyes, short hair, blue hair"
  },
  {
    "group": "葬送的芙莉莲",
    "name": "菈奥芬",
    "prompt": "laufen \\(sousou no frieren\\), sousou no frieren, 1girl, brown eyes, short hair, brown hair, orange hair, tassel hair ornament, double bun, medium breasts, bare shoulders"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "茵蒂克丝",
    "prompt": "index \\(toaru majutsu no index\\), toaru majutsu no index, 1girl, nun, green eyes, long hair, blue hair, grey hair, habit, safety pin, white dress"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "最后之作",
    "prompt": "last order \\(toaru majutsu no index\\), toaru majutsu no index, 1girl, brown eyes, brown hair, short hair, ahoge"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "食蜂操祈",
    "prompt": "shokuhou misaki, toaru majutsu no index, 1girl, yellow eyes, hair between eyes, brown eyes, star-shaped pupils, blonde hair, long hair, very long hair, tokiwadai school uniform, white gloves, elbow gloves, white thighhighs, summer uniform"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "御坂美琴",
    "prompt": "misaka mikoto, toaru majutsu no index, 1girl, brown eyes, brown hair, short hair, medium hair, small breasts, tokiwadai school uniform"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "白井黑子",
    "prompt": "shirai kuroko, toaru majutsu no index, 1girl, brown eyes, brown hair, long hair, twintails, hair bow, small breasts, tokiwadai school uniform, summer uniform"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "初春饰利",
    "prompt": "uiharu kazari, toaru majutsu no index, 1girl, brown eyes, short hair, black hair, hair flower, sakugawa school uniform, serafuku, summer uniform, head wreath"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "佐天泪子",
    "prompt": "saten ruiko, toaru majutsu no index, 1girl, blue eyes, green eyes, black hair, long hair, hair flower, medium breasts, sakugawa school uniform, serafuku, summer uniform"
  },
  {
    "group": "某科学的超电磁炮",
    "name": "芙兰达",
    "prompt": "frenda seivelun, toaru majutsu no index, 1girl, blue eyes, blonde hair, long hair, beret"
  },
  {
    "group": "鬼灭之刃",
    "name": "祢豆子",
    "prompt": "kamado nezuko, kimetsu no yaiba, 1girl, pink eyes, black hair, very long hair, gradient hair, brown hair, two-tone hair, long hair, hair ribbon, pink kimono, pink ribbon, long sleeves, forehead, haori, obi, checkered sash"
  },
  {
    "group": "鬼灭之刃",
    "name": "胡蝶忍",
    "prompt": "kochou shinobu, kimetsu no yaiba, 1girl, demon slayer uniform, purple eyes, black hair, purple hair, short hair, gradient hair, butterfly hair ornament, parted bangs, long sleeves, haori"
  },
  {
    "group": "鬼灭之刃",
    "name": "栗花落香奈乎",
    "prompt": "tsuyuri kanao, kimetsu no yaiba, 1girl, demon slayer uniform, purple eyes, black hair, long hair, butterfly hair ornament, side ponytail, blunt bangs, pleated skirt, black skirt, black jacket, white cape, long sleeves"
  },
  {
    "group": "鬼灭之刃",
    "name": "甘露寺蜜璃",
    "prompt": "kanroji mitsuri, kimetsu no yaiba, 1girl, demon slayer uniform, green eyes, hair between eyes, mole under eye, mole under each eye, pink hair, green hair, gradient hair, long hair, two-tone hair, twin braids, tri braids, thighs, multiple moles, pleated skirt, black skirt, long sleeves, haori"
  },
  {
    "group": "鬼灭之刃",
    "name": "堕姬",
    "prompt": "daki \\(kimetsu no yaiba\\), kimetsu no yaiba, 1girl, green eyes, yellow eyes, text in eyes, eyelashes, white hair, very long hair, long hair, black hair, green hair, hair stick, medium breasts, navel, collarbone, bare shoulders, nail polish, black nails, sharp fingernails, facial mark"
  },
  {
    "group": "鬼灭之刃",
    "name": "神崎葵",
    "prompt": "kanzaki aoi \\(kimetsu no yaiba\\), kimetsu no yaiba, 1girl, demon slayer uniform, blue eyes, v-shaped eyebrows, black hair, short hair, butterfly hair ornament, twintails, parted bangs, long sleeves, forehead"
  },
  {
    "group": "鬼灭之刃",
    "name": "鬼舞辻无惨",
    "prompt": "kibutsuji muzan, kimetsu no yaiba, 1girl, red eyes, slit pupils, black hair, long hair, long sleeves, sharp fingernails"
  },
  {
    "group": "间谍过家家",
    "name": "约尔·福杰",
    "prompt": "yor briar, spy x family, 1girl, red eyes, black hair, long hair, short hair with long locks, gold hairband, sidelocks, hair flower, thighs, black dress, black gloves, bare shoulders"
  },
  {
    "group": "间谍过家家",
    "name": "安妮亚·福杰",
    "prompt": "anya \\(spy x family\\), spy x family, 1girl, loli, green eyes, pink hair, medium hair, short hair, ahoge, eden academy school uniform, black dress, child, hairpods"
  },
  {
    "group": "间谍过家家",
    "name": "菲奥娜·弗罗斯特（夜帷）",
    "prompt": "fiona frost, spy x family, 1girl, hair over one eye, colored eyelashes, short hair, white hair, grey hair, navel"
  },
  {
    "group": "间谍过家家",
    "name": "梅丽达·戴斯蒙德",
    "prompt": "damian desmond, spy x family, 1boy, green eyes, short hair, black hair, eden academy school uniform, long sleeves, child"
  },
  {
    "group": "间谍过家家",
    "name": "贝基·布莱克贝尔",
    "prompt": "becky blackbell, spy x family, 1girl, brown eyes, green eyes, black hair, brown hair, short hair, pink hair, twintails, hair scrunchie, eden academy school uniform, black dress, long sleeves, child"
  },
  {
    "group": "莉可丽丝",
    "name": "錦木千束",
    "prompt": "nishikigi chisato, lycoris recoil, 1girl, red eyes, blonde hair, short hair, bob cut, hair ribbon, lycoris uniform, red dress, red ribbon, one side up"
  },
  {
    "group": "莉可丽丝",
    "name": "井之上泷奈",
    "prompt": "inoue takina, lycoris recoil, 1girl, purple eyes, black hair, long hair, lycoris uniform, blue dress, white shirt, long sleeves, neck ribbon"
  },
  {
    "group": "莉可丽丝",
    "name": "中原瑞树",
    "prompt": "nakahara misaki, nhk ni youkoso!, 1girl, brown eyes, short hair, black hair, brown hair, bob cut, long sleeves, raglan sleeves"
  },
  {
    "group": "莉可丽丝",
    "name": "栗梦",
    "prompt": "kurumi \\(lycoris recoil\\), lycoris recoil, 1girl, blue eyes, blonde hair, long hair, very long hair, black hairband, hair ribbon, white hoodie, black ribbon, hood down, long sleeves, forehead, drawstring"
  },
  {
    "group": "魔法少女小圆",
    "name": "鹿目圆",
    "prompt": "charlotte \\(madoka magica\\), mahou shoujo madoka magica, 1girl, yellow eyes, blonde hair, pink hair, twintails, twin drills, magical girl"
  },
  {
    "group": "魔法少女小圆",
    "name": "鹿目圆",
    "prompt": "kaname madoka, mahou shoujo madoka magica, 1girl, pink eyes, pink hair, short hair, short twintails, hair ribbon, hair bow, white gloves, magical girl"
  },
  {
    "group": "魔法少女小圆",
    "name": "鹿目圆",
    "prompt": "kaname madoka \\(magical girl\\), mahou shoujo madoka magica, 1girl, pink eyes, pink hair, short hair, short twintails, hair bow, white gloves, bubble skirt, puffy short sleeves, magical girl"
  },
  {
    "group": "魔法少女小圆",
    "name": "鹿目圆",
    "prompt": "kriemhild gretchen, mahou shoujo madoka magica, 1girl, pink eyes, pink hair, short hair, long hair, twintails, hair ribbon, witch (madoka magica)"
  },
  {
    "group": "魔法少女小圆",
    "name": "鹿目圆",
    "prompt": "ultimate madoka, mahou shoujo madoka magica, 1girl, yellow eyes, pink hair, very long hair, long hair, two side up, hair bow, hair ribbon, white gloves, white dress, wings, magical girl"
  },
  {
    "group": "魔法少女小圆",
    "name": "暁美焰",
    "prompt": "akemi homura, mahou shoujo madoka magica, 1girl, purple eyes, long hair, black hair, hairband, magical girl"
  },
  {
    "group": "魔法少女小圆",
    "name": "暁美焰",
    "prompt": "akemi homura \\(black dress\\), mahou shoujo madoka magica, 1girl, purple eyes, black hair, long hair, hairband, funeral dress"
  },
  {
    "group": "魔法少女小圆",
    "name": "暁美焰",
    "prompt": "akuma homura, mahou shoujo madoka magica, 1girl, purple eyes, black hair, long hair, hair bow, elbow gloves, black gloves, thighhighs, black dress, argyle clothes, bare shoulders, choker, feathered wings, black wings"
  },
  {
    "group": "魔法少女小圆",
    "name": "暁美焰",
    "prompt": "homulilly, mahou shoujo madoka magica, 1girl, purple eyes, black hair, long hair, funeral dress, witch (madoka magica)"
  },
  {
    "group": "魔法少女小圆",
    "name": "美树沙耶香",
    "prompt": "miki sayaka \\(magical girl\\), mahou shoujo madoka magica, 1girl, blue eyes, blue hair, short hair, musical note hair ornament, hairclip, white gloves, white cape, white thighhighs, blue skirt, pleated skirt, detached sleeves, zettai ryouiki, frills, magical girl, soul gem, strapless"
  },
  {
    "group": "魔法少女小圆",
    "name": "巴麻美",
    "prompt": "tomoe mami \\(magical girl\\), mahou shoujo madoka magica, 1girl, yellow eyes, blonde hair, long hair, twintails, hair ornament, fingerless gloves, striped clothes, striped thighhighs, vertical-striped clothes, detached sleeves, twin drills, magical girl, beret, corset"
  },
  {
    "group": "魔法少女小圆",
    "name": "佐仓杏子",
    "prompt": "sakura kyoko, mahou shoujo madoka magica, 1girl, red eyes, red hair, long hair, ponytail, hair bow, magical girl"
  },
  {
    "group": "魔法少女小圆",
    "name": "环彩羽",
    "prompt": "tamaki iroha, mahou shoujo madoka magica, 1girl, pink eyes, pink hair, very long hair, long hair, blunt bangs, sidelocks, small breasts, feet, hood up, magical girl, bodystocking"
  },
  {
    "group": "轻音少女",
    "name": "平泽唯",
    "prompt": "hirasawa yui, k-on!, 1girl, brown eyes, brown hair, short hair, hairclip, sakuragaoka high school uniform"
  },
  {
    "group": "轻音少女",
    "name": "田井中律",
    "prompt": "tainaka ritsu, k-on!, 1girl, brown eyes, brown hair, short hair, hairband, sakuragaoka high school uniform"
  },
  {
    "group": "轻音少女",
    "name": "琴吹紬",
    "prompt": "kotobuki tsumugi, k-on!, 1girl, blue eyes, thick eyebrows, blonde hair, long hair, sakuragaoka high school uniform"
  },
  {
    "group": "轻音少女",
    "name": "中野梓",
    "prompt": "nakano azusa, k-on!, 1girl, brown eyes, long hair, black hair, twintails, sakuragaoka high school uniform"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "爱蜜莉雅",
    "prompt": "emilia \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, pointy ears, purple eyes, long hair, white hair, grey hair, very long hair, x hair ornament, crown braid, blunt bangs, hair flower, hair ribbon, medium breasts, bare shoulders, purple ribbon, elf"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "蕾姆",
    "prompt": "rem \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, maid, maid headdress, blue eyes, hair over one eye, blue hair, short hair, x hair ornament, hair ribbon, medium breasts, roswaal mansion maid uniform, detached sleeves"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "拉姆",
    "prompt": "ram \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, maid, maid headdress, red eyes, pink eyes, hair over one eye, pink hair, short hair, x hair ornament, hair ribbon, small breasts, medium breasts, roswaal mansion maid uniform, detached sleeves"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "爱姬多娜",
    "prompt": "echidna \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, hair between eyes, purple eyes, colored eyelashes, white hair, very long hair, long hair, butterfly hair ornament, medium breasts, black dress, black capelet, long sleeves"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "贝阿特丽丝",
    "prompt": "beatrice \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, loli, blue eyes, symbol-shaped pupils, butterfly-shaped pupils, blonde hair, long hair, sidelocks, twintails, hair ribbon, red capelet, striped clothes, fur-trimmed capelet, long sleeves, twin drills, mini crown"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "佩特拉·雷蒂",
    "prompt": "petra leyte, re:zero kara hajimeru isekai seikatsu, 1girl, maid, hair between eyes, green eyes, blue eyes, short hair, blonde hair, orange hair, bow hairband, red hairband, roswaal mansion maid uniform, red ribbon, detached sleeves"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "芙雷德莉卡",
    "prompt": "frederica baumann, re:zero kara hajimeru isekai seikatsu, 1girl, maid, maid headdress, sharp teeth, green eyes, hair between eyes, thick eyebrows, blonde hair, long hair, very long hair, medium breasts, roswaal mansion maid uniform, black ribbon"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "菲利克斯·阿盖尔",
    "prompt": "felix argyle, re:zero kara hajimeru isekai seikatsu, 1boy, cat boy, cat ears, cat tail, brown eyes, yellow eyes, hair between eyes, thick eyebrows, short eyebrows, short hair, brown hair, bob cut, parted bangs, hair bow, hair ribbon, collarbone, striped clothes, vertical-striped clothes, bare shoulders, white bow, detached sleeves, blue choker, blue ribbon"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "普莉希拉·巴列尔",
    "prompt": "priscilla barielle, re:zero kara hajimeru isekai seikatsu, 1girl, red eyes, blonde hair, long hair, orange hair, very long hair, braided bangs, single braid, sidelocks, hair flower, medium breasts, collarbone, red dress, bare shoulders, choker, necklace, earrings, bridal gauntlets"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "库珥修·卡尔斯滕",
    "prompt": "crusch karsten, re:zero kara hajimeru isekai seikatsu, 1girl, hair between eyes, brown eyes, orange eyes, yellow eyes, green hair, long hair, very long hair, low-tied long hair, military uniform, white gloves"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "菲鲁特",
    "prompt": "felt \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, fang, red eyes, hair between eyes, blonde hair, short hair, braid, ponytail, hair bow, small breasts, navel, red scarf, brown gloves, black bow"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "爱尔莎·葛兰希尔特（肠肠猎人）",
    "prompt": "elsa granhilte, re:zero kara hajimeru isekai seikatsu, 1girl, purple eyes, mole under eye, black hair, long hair, very long hair, single braid, braid, hair flower, navel, black cloak, two-sided cloak, multicolored cloak, black dress, center opening, bridal gauntlets"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "『怠惰』贝特鲁吉乌斯·罗曼尼康帝",
    "prompt": "petelgeuse romaneeconti, re:zero kara hajimeru isekai seikatsu, 1girl, blue eyes, hair between eyes, short hair, blue hair, green hair, x hair ornament, collarbone, long sleeves"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "『虚饰魔女』潘朵拉",
    "prompt": "pandora \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, blue eyes, colored eyelashes, grey hair, very long hair, long hair, white hair, parted bangs, hair ribbon, collarbone, white dress, blue ribbon, bare shoulders, off shoulder, forehead"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "天蝎座",
    "prompt": "shaula \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, green eyes, hair between eyes, brown hair, multi-tied hair, long hair, ponytail, high ponytail, hair ribbon, thighs, navel, short shorts, bikini top only, black bikini, black shorts, front-tie bikini top, stomach"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "特蕾西亚",
    "prompt": "theresia van astrea, re:zero kara hajimeru isekai seikatsu, 1girl, blue eyes, red hair, long hair, very long hair, two side up, hair flower"
  },
  {
    "group": "从零开始的异世界生活",
    "name": "白鯨",
    "prompt": "hakugei \\(re:zero\\), re:zero kara hajimeru isekai seikatsu, 1girl, blue eyes, hair between eyes, hair over one eye, blue hair, short hair, long hair, x hair ornament, medium breasts"
  },
  {
    "group": "物语系列",
    "name": "战场原黑仪",
    "prompt": "senjougahara hitagi, monogatari \\(series\\), 1girl, blue eyes, purple hair, long hair, medium breasts, naoetsu high school uniform"
  },
  {
    "group": "物语系列",
    "name": "八九寺真宵",
    "prompt": "hachikuji mayoi, monogatari \\(series\\), 1girl, red eyes, long hair, black hair, brown hair, twintails, hair ribbon, hairband, school uniform, suspender skirt, green ribbon, backpack"
  },
  {
    "group": "物语系列",
    "name": "神原骏河",
    "prompt": "kanbaru suruga, monogatari \\(series\\), 1girl, brown eyes, short hair, black hair, blue hair, medium breasts, bandages, naoetsu high school uniform"
  },
  {
    "group": "物语系列",
    "name": "千石抚子",
    "prompt": "sengoku nadeko, monogatari \\(series\\), 1girl, brown eyes, brown hair, short hair"
  },
  {
    "group": "物语系列",
    "name": "羽川翼",
    "prompt": "hanekawa tsubasa, monogatari \\(series\\), 1girl, cat ears, purple eyes, yellow eyes, glasses, long hair, black hair, white hair, twin braids, naoetsu high school uniform"
  },
  {
    "group": "物语系列",
    "name": "忍野忍",
    "prompt": "oshino shinobu, monogatari \\(series\\), 1girl, pointy ears, yellow eyes, blonde hair, long hair, very long hair, bare shoulders"
  },
  {
    "group": "物语系列",
    "name": "阿良良木历",
    "prompt": "araragi koyomi, monogatari \\(series\\), 1girl, black hair, long hair, short hair, ahoge, naoetsu high school uniform"
  },
  {
    "group": "物语系列",
    "name": "忍野扇",
    "prompt": "oshino ougi, monogatari \\(series\\), 1girl, pale skin, black eyes, empty eyes, hair between eyes, short hair, black hair, bob cut, small breasts, naoetsu high school uniform, pink shirt, pleated skirt, black pantyhose, sleeves past fingers, black necktie"
  },
  {
    "group": "物语系列",
    "name": "羽川翼",
    "prompt": "black hanekawa, monogatari \\(series\\), 1girl, cat girl, cat ears, yellow eyes, slit pupils, white hair, long hair, very long hair"
  },
  {
    "group": "物语系列",
    "name": "阿良良木月火",
    "prompt": "araragi tsukihi, monogatari \\(series\\), 1girl, black eyes, black hair, short hair, egg hair ornament, ahoge"
  },
  {
    "group": "物语系列",
    "name": "忍野忍（big）",
    "prompt": "kiss-shot acerola-orion heart-under-blade, monogatari \\(series\\), 1girl, pointy ears, yellow eyes, blonde hair, very long hair, long hair, elbow gloves, bare shoulders, vampire"
  },
  {
    "group": "物语系列",
    "name": "老仓育",
    "prompt": "oikura sodachi, monogatari \\(series\\), 1girl, hair between eyes, brown eyes, grey eyes, grey hair, long hair, twintails, small breasts, collarbone, naoetsu high school uniform"
  },
  {
    "group": "物语系列",
    "name": "斧乃木余接",
    "prompt": "ononoki yotsugi, monogatari \\(series\\), 1girl, green eyes, googly eyes, thick eyebrows, short eyebrows, aqua hair, short hair, long hair, twintails, hat, striped clothes"
  },
  {
    "group": "Fate系列",
    "name": "阿尔托莉雅·潘德拉贡（Saber）",
    "prompt": "saber \\(fate\\), fate \\(series\\), 1girl, green eyes, blonde hair, ahoge, hair ribbon"
  },
  {
    "group": "Fate系列",
    "name": "远坂凛",
    "prompt": "tohsaka rin \\(fate/extra\\), fate/extra, 1girl, blue eyes, green eyes, long hair, black hair, brown hair, two side up, parted bangs, hair ribbon, medium breasts, black thighhighs, long sleeves, black ribbon"
  },
  {
    "group": "Fate系列",
    "name": "间桐樱",
    "prompt": "matou sakura, fate \\(series\\), 1girl, purple eyes, purple hair, long hair, hair ribbon, red ribbon"
  },
  {
    "group": "Fate系列",
    "name": "贞德",
    "prompt": "jeanne d'arc \\(fate\\), fate \\(series\\), 1girl, blue eyes, blonde hair, very long hair, long hair, single braid, headpiece"
  },
  {
    "group": "Fate系列",
    "name": "玛修·基列莱特",
    "prompt": "mash kyrielight \\(dangerous beast\\), fate \\(series\\), 1girl, wolf ears, wolf tail, purple tail, purple eyes, hair over one eye, short hair, purple hair, navel, elbow gloves, revealing clothes, fur-trimmed gloves, purple gloves, fur collar, bare shoulders, halloween costume"
  },
  {
    "group": "Fate系列",
    "name": "斯卡哈",
    "prompt": "skadi \\(fate\\), fate/grand order, 1girl, red eyes, hair between eyes, purple hair, long hair, thighs, purple dress, bare shoulders, tiara"
  },
  {
    "group": "Fate系列",
    "name": "伊什塔尔",
    "prompt": "ishtar \\(swimsuit rider) (fate\\), fate \\(series\\), 1girl, red eyes, black hair, long hair, very long hair, two side up, parted bangs, hair ribbon, medium breasts, long legs, pink jacket, white one-piece swimsuit, long sleeves, hoop earrings"
  },
  {
    "group": "Fate系列",
    "name": "尼禄·克劳狄乌斯",
    "prompt": "nero claudius \\(fate/extra\\), fate \\(series\\), 1girl, green eyes, hair between eyes, blonde hair, single hair bun, short hair, ahoge, hair intakes, french braid, hair ribbon, medium breasts, epaulettes"
  },
  {
    "group": "Fate系列",
    "name": "冲田总司（女性化设定）",
    "prompt": "okita souji \\(koha-ace\\), fate \\(series\\), 1girl, yellow eyes, hair between eyes, short hair, blonde hair, ahoge, hair bow, medium breasts, short kimono, white kimono, black scarf, black thighhighs, black bow, katana, haori, shinsengumi, half updo, obi"
  },
  {
    "group": "Fate系列",
    "name": "玉藻前",
    "prompt": "tamamo no mae \\(fate/extra\\), fate \\(series\\), 1girl, fox girl, fox ears, fox tail, animal ear fluff, yellow eyes, hair between eyes, pink hair, long hair, twintails, hair bow, hair ribbon, bare shoulders, detached sleeves"
  },
  {
    "group": "电锯人",
    "name": "玛奇玛",
    "prompt": "makima \\(chainsaw man\\), chainsaw man, 1girl, ringed eyes, yellow eyes, red hair, long hair, medium hair, braided ponytail, sidelocks, medium breasts, white shirt, collared shirt, black necktie, long sleeves, formal"
  },
  {
    "group": "电锯人",
    "name": "帕瓦",
    "prompt": "power \\(chainsaw man\\), chainsaw man, 1girl, demon horns, red horns, sharp teeth, hair between eyes, yellow eyes, red eyes, cross-shaped pupils, long hair, blonde hair, white shirt"
  },
  {
    "group": "电锯人",
    "name": "姬野",
    "prompt": "himeno \\(chainsaw man\\), chainsaw man, 1girl, green eyes, eyepatch, short hair, black hair"
  },
  {
    "group": "电锯人",
    "name": "东山小红",
    "prompt": "higashiyama kobeni, chainsaw man, 1girl, mole under mouth, black eyes, mole under eye, black hair, short hair, medium hair, brown hair, short ponytail, hairclip, multiple moles, sweat, white shirt, collared shirt, single sidelock"
  },
  {
    "group": "电锯人",
    "name": "早川秋",
    "prompt": "hayakawa aki, chainsaw man, 1boy, blue eyes, hair between eyes, short hair, black hair, suit, collared shirt, white shirt, black jacket, suit jacket, black necktie, stud earrings, topknot, formal"
  },
  {
    "group": "咒术回战",
    "name": "钉崎野蔷薇",
    "prompt": "kugisaki nobara, jujutsu kaisen, 1girl, brown eyes, short hair, brown hair, jujutsu tech uniform, school uniform, long sleeves"
  },
  {
    "group": "咒术回战",
    "name": "禅院真希",
    "prompt": "zen'in maki, jujutsu kaisen, 1girl, yellow eyes, glasses, green hair, short hair, black hair, long hair, ponytail, burn scar, scar on face, scar on arm, muscular female"
  },
  {
    "group": "咒术回战",
    "name": "三轮霞",
    "prompt": "miwa kasumi, jujutsu kaisen, 1girl, blue eyes, long hair, blue hair, light blue hair, straight hair, medium breasts, black suit, white shirt, collared shirt, black jacket, black pants, long sleeves, black necktie, formal"
  },
  {
    "group": "咒术回战",
    "name": "冥冥",
    "prompt": "mei mei \\(jujutsu kaisen\\), jujutsu kaisen, 1girl, red lips, hair over one eye, long hair, white hair, grey hair, braided bangs, braided ponytail, black dress"
  },
  {
    "group": "咒术回战",
    "name": "九十九由基",
    "prompt": "tsukumo yuki \\(jujutsu kaisen\\), jujutsu kaisen, 1girl, long hair, blonde hair, navel, black shirt"
  },
  {
    "group": "进击的巨人",
    "name": "三笠·阿克曼",
    "prompt": "mikasa ackerman, shingeki no kyojin, 1girl, black eyes, hair between eyes, black hair, short hair, paradis military uniform, scarf, jacket"
  },
  {
    "group": "进击的巨人",
    "name": "希斯特利亚·芮斯",
    "prompt": "krista lenz, shingeki no kyojin, 1girl, blue eyes, hair between eyes, blonde hair, short hair, long hair, paradis military uniform"
  },
  {
    "group": "进击的巨人",
    "name": "阿尼·雷恩哈特",
    "prompt": "annie leonhart, shingeki no kyojin, 1girl, blue eyes, blonde hair, short hair, paradis military uniform, long sleeves"
  },
  {
    "group": "进击的巨人",
    "name": "莎夏·布劳斯",
    "prompt": "sasha blouse, shingeki no kyojin, 1girl, brown eyes, brown hair, short hair, ponytail, paradis military uniform, jacket, emblem"
  },
  {
    "group": "进击的巨人",
    "name": "汉吉·佐耶",
    "prompt": "hange zoe, shingeki no kyojin, 1girl, brown eyes, glasses, brown hair, short hair, ponytail, paradis military uniform"
  },
  {
    "group": "多娜多娜",
    "name": "珀儿诺（ポルノ）战斗服",
    "prompt": "porno \\(dohna dohna\\),dohna dohna issho ni warui koto o shiyou,1girl,pink eyes,eyepatch,short hair,pink hair,white hair,bare shoulders,two-tone hair,flat chest,colored inner hair,heart hair ornament,small breasts, outfit,revealing clothes,black gloves,elbow gloves,strap,padlock,thighhighs,asymmetrical legwear,mismatched legwear,multiple straps,thighs boots,groin,harness,crop top,layered gloves,crotch strap,pink padlock,crotch lock,black thighhighs,thigh boots,white boots"
  },
  {
    "group": "多娜多娜",
    "name": "珀儿诺（ポルノ）常服",
    "prompt": "porno \\(dohna dohna\\),dohna dohna issho ni warui koto o shiyou,1girl,pink eyes,short hair,pink hair,white hair,two-tone hair,colored inner hair,heart hair ornament,small breasts,sundress,spiked collar,frills,sleeveless dress,frilled dress,bare shoulders,white dress,ribbon,spiked collar,white sundress,frilled dress,green ribbon,dress ribbon"
  },
  {
    "group": "多娜多娜",
    "name": "绮菈绮菈（キラキラ）战斗服",
    "prompt": "Kirakira,pink hair,twintails,aqua eyes,multicolored hair,<lora:Kirakiraキラキラドーナドーナ_いっしょにわるいことしよう:1>,<lora:Gyokai:0.4>,masterpiece,best quality,absurdres,onono imoko,<lora:dohna_dohna:0.8>,kirakira \\(dohna dohna\\),1girl,solo,navel,twintails,underboob,pink hair,hand on own hip,looking at viewer,medium breasts,simple background,multicolored hair,chainsaw,weapon"
  },
  {
    "group": "多娜多娜",
    "name": "绮菈绮菈（キラキラ）常服",
    "prompt": "kirakira \\(dohna dohna\\),onono imoko,<lora:Kirakiraキラキラドーナドーナ_いっしょにわるいことしよう:1>,<lora:Gyokai:0.4>,<lora:dohna_dohna:0.8>,1girl,solo,twintails,pink hair,looking at viewer,medium breasts,Kirakira,aqua eyes,blue eyes,multicolored hair,bare shoulder shirt,kirakira,skirt,jacket,off shoulder,thighhighs,single thighhigh,plaid skirt,plaid,green skirt,thigh strap,choker,jewelry"
  },
  {
    "group": "多娜多娜",
    "name": "梅蒂可（メディコ）战斗服",
    "prompt": "medico_(dohna_dohna),Medico,aqua hair,purple hair,two-tone hair,twintails,double bun,nurse,nurse cap,bare shoulders,off shoulder,elbow gloves,purple thighhighs,purple gloves,white gloves,two-tone gloves,revealing clothes"
  },
  {
    "group": "多娜多娜",
    "name": "梅蒂可（メディコ）常服",
    "prompt": "medico_(dohna_dohna)，Medico,two-tone hair,aqua hair,purple hair,two-tone hair,aqua hair,purple hair,green hair,ponytail,hairclip,hair ribbon,yellow ribbon,semi-rimless eyewear,school uniform,white thighhighs,white sailor collar,green neckerchief,pink dress,white shirt,pleated dress,belt buckle,sleeveless dress,collared shirt,pink belt,pleated skirt,pink skirt"
  },
  {
    "group": "多娜多娜",
    "name": "安缇娜（アンテナ）战斗服",
    "prompt": "antenna_(dohna_dohna),dohnaantenna,fake animal ears,cat ear headphones,single glove,jacket,choker,short sleeves,thighhighs,asymmetrical legwear,thigh boots,roller skates,short shorts,black bra,polka dot socks,black socks"
  },
  {
    "group": "多娜多娜",
    "name": "安缇娜（アンテナ）常服",
    "prompt": "antenna_(dohna_dohna)，dohnaantenna,school uniform, pleated skirt, green skirt, sailor collar, serafuku, long sleeves, yellow shirt,backpack, pink hoodie, long sleeves, polka dot socks, black socks, shoes, polka dot legwear, white overalls shorts, pink footwear"
  },
  {
    "group": "多娜多娜",
    "name": "菊千代（菊千代）红色战衣",
    "prompt": "kikuchiyo_(dohna_dohna),Mibu Kikuchiyo,dress,pantyhose,black gloves,red bodysuit,black skirt,hair ornament,long sleeves,skirt,black gloves,elbow gloves,Japanese clothes,kikuchiyo,kikuchiyo,long hair,black hair,purple hair,bangs,multicolored hair,red eyes,medium breasts,pantyhose,red pantyhose,covered navel,black sandals skin tight,clevage,bodysuit,red bodysuit,gloves,breast cutout"
  },
  {
    "group": "多娜多娜",
    "name": "菊千代（菊千代）白色战衣",
    "prompt": "kikuchiyo_(dohna_dohna),Mibu Kikuchiyo,dress,pantyhose,black gloves,hair ornament,long sleeves,skirt,black gloves,elbow gloves,white skirt,Japanese clothes,white shirt,black pantyhose,elbow gloves,kikuchiyo,long hair,black hair,purple hair,bangs,multicolored hair,red eyes,medium breasts,pantyhose,gloves,black gloves,bodysuit,white bodysuit,white bodysuit,sandals,black sandals,sailor collar"
  },
  {
    "group": "多娜多娜",
    "name": "菊千代（菊千代）常服",
    "prompt": "kikuchiyo_(dohna_dohna),Mibu Kikuchiyo,dress,pantyhose,hair ornament,long sleeves,skirt,school uniform,white shirt,white pantyhose,hair ornament,long sleeves,school uniform,kikuchiyo,long hair,black hair,purple hair,bangs,multicolored hair,red eyes,medium breasts,school uniform,long sleeves skirt,black skirt,pleated skirt,pantyhose,white pantyhose,boots,black footwear hair ornament"
  },
  {
    "group": "赛马娘",
    "name": "特别周",
    "prompt": "special week \\(umamusume\\), umamusume, 1girl, horse girl, horse ears, horse tail, ear bow, purple eyes, hair between eyes, brown hair, white hair, short hair, two-tone hair, streaked hair, braid, medium breasts, purple bow"
  },
  {
    "group": "赛马娘",
    "name": "无声铃鹿",
    "prompt": "silence suzuka \\(umamusume\\), umamusume, 1girl, horse girl, horse ears, horse tail, ear covers, green eyes, blue eyes, aqua eyes, orange hair, long hair, white hairband, blunt bangs, hime cut"
  },
  {
    "group": "赛马娘",
    "name": "东海帝皇",
    "prompt": "tokai teio \\(beyond the horizon) (umamusume\\), umamusume, 1girl, horse girl, horse ears, horse tail, blue eyes, hair between eyes, brown hair, streaked hair, white hair, long hair, two-tone hair, ponytail, high ponytail, navel, fingerless gloves, red jacket, cropped jacket, black gloves, midriff"
  },
  {
    "group": "赛马娘",
    "name": "黄金船",
    "prompt": "gold ship \\(la mode 564) (umamusume\\), umamusume, 1girl, horse girl, horse ears, horse tail, ear ornament, purple eyes, pink eyes, official alternate hairstyle, grey hair, long hair, very long hair, ponytail, blunt bangs, black dress, black gloves, elbow gloves, bare shoulders, single bare shoulder, necklace"
  },
  {
    "group": "赛马娘",
    "name": "大和赤骥",
    "prompt": "daiwa scarlet \\(umamusume\\), umamusume, 1girl, horse girl, horse ears, horse tail, fang, red eyes, hair between eyes, very long hair, brown hair, hair intakes, twintails, tiara"
  },
  {
    "group": "赛马娘",
    "name": "目白麦昆",
    "prompt": "mejiro mcqueen \\(end of sky) (umamusume\\), umamusume, 1girl, horse girl, horse ears, horse tail, purple eyes, long hair, purple hair, swept bangs, navel, white gloves, mini top hat, white headwear, white shorts, white jacket, white shirt, shoulder cutout, midriff"
  },
  {
    "group": "赛马娘",
    "name": "好自然",
    "prompt": "nice nature \\(run&win) (umamusume\\), umamusume, 1girl, horse girl, horse ears, horse tail, brown eyes, brown hair, streaked hair, medium hair, ponytail, navel, white skirt, blue jacket, white shirt, open jacket, cheerleader, midriff, crop top, pom pom (cheerleading)"
  },
  {
    "group": "碧蓝航线",
    "name": "企业",
    "prompt": "enterprise \\(warship girls r\\), warship girls r, 1girl, blue eyes, blonde hair, very long hair, low-tied long hair, medium breasts, navel, peaked cap, elbow gloves, black thighhighs, white gloves"
  },
  {
    "group": "碧蓝航线",
    "name": "贝尔法斯特",
    "prompt": "belfast \\(azur lane\\), azur lane, 1girl, maid, maid headdress, blue eyes, purple eyes, white hair, long hair, very long hair, french braid, collarbone, collar, chain"
  },
  {
    "group": "碧蓝航线",
    "name": "赤城",
    "prompt": "akagi \\(azur lane\\), azur lane, 1girl, fox girl, fox ears, fox tail, multiple tails, animal ear fluff, red eyes, brown hair, long hair, black hair, very long hair, kitsune"
  },
  {
    "group": "碧蓝航线",
    "name": "加贺",
    "prompt": "kaga \\(azur lane\\), azur lane, 1girl, fox girl, fox ears, fox tail, multiple tails, animal ear fluff, blue eyes, white hair, short hair, blunt bangs, white kimono, fox mask, wide sleeves, kitsune"
  },
  {
    "group": "碧蓝航线",
    "name": "高雄",
    "prompt": "takao \\(azur lane\\), azur lane, 1girl, brown eyes, yellow eyes, black hair, very long hair, long hair, ponytail, hair flaps, hair bow, military uniform, black pantyhose, white bow"
  },
  {
    "group": "碧蓝航线",
    "name": "欧根亲王",
    "prompt": "prinz eugen \\(cordial cornflower) (azur lane\\), azur lane, 1girl, hair between eyes, brown eyes, yellow eyes, streaked hair, red hair, antenna hair, very long hair, white hair, two side up, sidelocks, hair bow, mole on breast, thighs, black dress, black gloves, bare shoulders"
  },
  {
    "group": "碧蓝航线",
    "name": "光辉",
    "prompt": "illustrious \\(muse) (azur lane\\), azur lane, 1girl, blue eyes, mole under eye, white hair, very long hair, hair ornament, navel, white gloves, elbow gloves, white dress, bare shoulders, detached collar, idol"
  },
  {
    "group": "碧蓝航线",
    "name": "山城",
    "prompt": "yamashiro \\(azur lane\\), azur lane, 1girl, cat ears, animal ear fluff, fang, cat tail, tail bell, red eyes, mismatched eyebrows, black hair, short hair, blunt bangs, sideboob, black kimono, sideless kimono, mask on head, white thighhighs, fox mask, wide sleeves, jingle bell"
  },
  {
    "group": "明日方舟",
    "name": "阿米娅",
    "prompt": "amiya \\(guard) (arknights\\), arknights, 1girl, rabbit ears, blue eyes, hair between eyes, brown hair, long hair, very long hair, ponytail, sidelocks, open jacket, white shirt, black jacket, hooded jacket, blue skirt, black pantyhose, long sleeves, hood up, rabbit girl"
  },
  {
    "group": "明日方舟",
    "name": "德克萨斯",
    "prompt": "texas \\(winter messenger) (arknights\\), arknights, 1girl, wolf girl, wolf ears, animal ear fluff, wolf tail, hair between eyes, brown eyes, orange eyes, black hair, long hair, red hair, two-tone hair, colored inner hair, white jacket, black shirt, red gloves, open jacket, black pantyhose, long sleeves, shoulder strap"
  },
  {
    "group": "明日方舟",
    "name": "能天使",
    "prompt": "exusiai \\(arknights\\), arknights, 1girl, red eyes, orange eyes, hair over one eye, red hair, short hair, white jacket, black gloves, fingerless gloves, halo, detached wings, energy wings"
  },
  {
    "group": "明日方舟",
    "name": "陈",
    "prompt": "ch'en \\(arknights\\), arknights, 1girl, dragon horns, dragon tail, red eyes, hair between eyes, blue hair, long hair, sidelocks, medium breasts, thighs, bare shoulders, dragon girl"
  },
  {
    "group": "明日方舟",
    "name": "斯卡蒂",
    "prompt": "skadi \\(elite ii) (arknights\\), arknights, 1girl, red eyes, hair between eyes, grey hair, very long hair, low-tied long hair, white hair, medium breasts, thighs, thigh cutout, black gloves, black pants, black shirt, bare shoulders, detached sleeves, black ascot"
  },
  {
    "group": "明日方舟",
    "name": "赫拉格（部分设定女性化）",
    "prompt": "surtr \\(colorful wonderland) (arknights\\), arknights, 1girl, demon horns, horns, purple eyes, hair between eyes, red hair, very long hair, star hair ornament, hair intakes, hair rings, medium breasts, thighs, thigh strap, navel, black bikini, swimsuit cover-up, side-tie bikini bottom, bare shoulders, detached sleeves, long sleeves, criss-cross halter, stomach"
  },
  {
    "group": "明日方舟",
    "name": "推进之王",
    "prompt": "blaze \\(arknights\\), arknights, 1girl, cat girl, cat ears, cat tail, blue eyes, hair between eyes, black hair, very long hair, long hair, blue hair, red hairband, black gloves"
  },
  {
    "group": "Vtuber",
    "name": "超天酱（超てんちゃん）",
    "prompt": "chouzetsusaikawa tenshi-chan, needy girl overdose, 1girl, quad tails, blue eyes, pink hair, blue hair, multicolored hair, blonde hair, very long hair, long hair, multiple hair bows, twintails, hair bow, serafuku, blue shirt, pleated skirt, blue bow, long sleeves, purple bow, pink bow, sailor collar, yellow bow, multicolored nails"
  },
  {
    "group": "Vtuber",
    "name": "超绝最可爱天使酱",
    "prompt": "chouzetsusaikawa tenshi-chan \\(dark angel\\), needy girl overdose, 1girl, quad tails, black eyes, red hair, multicolored hair, black hair, very long hair, long hair, white hair, grey hair, multiple hair bows, twintails, serafuku, black shirt, black skirt, pleated skirt, long sleeves, black bow, red sailor collar, red bow, boxcutter"
  },
  {
    "group": "Vtuber",
    "name": "糖糖",
    "prompt": "ame-chan \\(needy girl overdose\\), needy girl overdose, 1girl, black eyes, hair over one eye, black hair, long hair, x hair ornament, twintails, red shirt, collared shirt, suspender skirt, black skirt, neck ribbon, black ribbon, black nails"
  },
  {
    "group": "Vtuber",
    "name": "超天酱",
    "prompt": "pien cat \\(needy girl overdose\\), needy girl overdose, 1girl, quad tails, blue eyes, pink hair, blue hair, multicolored hair, blonde hair, long hair, very long hair, twintails, blue shirt, pink bow, blue bow, long sleeves, purple bow, cat"
  },
  {
    "group": "Vtuber",
    "name": "绊爱",
    "prompt": "kizuna ai, kizuna ai inc., 1girl, blue eyes, brown hair, long hair, streaked hair, pink hair, pink hairband, medium breasts, navel, detached sleeves, virtual youtuber"
  },
  {
    "group": "Vtuber",
    "name": "绊爱（a.i. games）",
    "prompt": "kizuna ai \\(a.i. games\\), kizuna ai inc., 1girl, blue eyes, aqua eyes, green eyes, brown hair, streaked hair, pink hair, short hair, pink hairband, swept bangs, medium breasts, navel, thigh strap, fingerless gloves, short shorts, black gloves, black shorts, headphones around neck, open jacket, white shirt, blue jacket, short sleeves, belt, virtual youtuber, midriff"
  },
  {
    "group": "Vtuber",
    "name": "绊爱（elegant）",
    "prompt": "kizuna ai \\(elegant\\), kizuna ai inc., 1girl, hand up, blue eyes, green eyes, brown hair, streaked hair, pink hair, long hair, very long hair, pink hairband, medium breasts, navel, white shorts, short shorts, white shirt, sleeveless shirt, detached sleeves, black necktie, long sleeves, bare shoulders, short necktie, detached collar, virtual youtuber"
  },
  {
    "group": "Vtuber",
    "name": "绊爱（musician）",
    "prompt": "kizuna ai \\(musician\\), kizuna ai inc., 1girl, blue eyes, aqua eyes, brown hair, streaked hair, long hair, pink hair, very long hair, ponytail, medium breasts, navel, collarbone, white shirt, black shorts, short shorts, off-shoulder shirt, bare shoulders, belt, black choker, short sleeves, virtual youtuber, pink nails, bracelet, midriff, wristband, crop top"
  },
  {
    "group": "Vtuber",
    "name": "神乐めあ",
    "prompt": "kagura mea, kagura gumi, 1girl, heterochromia, blue eyes, yellow eyes, white hair, very long hair, long hair, twintails, sidelocks, medium breasts, white gloves, peaked cap, virtual youtuber"
  },
  {
    "group": "Vtuber",
    "name": "星街彗星",
    "prompt": "hoshimachi suisei \\(1st costume\\), hololive, 1girl, blue eyes, hair between eyes, star in eye, blue hair, medium hair, long hair, side ponytail, sidelocks, hair ribbon, thigh strap, plaid headwear, grey headwear, black gloves, partially fingerless gloves, plaid jacket, plaid skirt, grey jacket, plaid dress, long sleeves, blue ribbon, virtual youtuber, blue nails, beret, mini crown, blue ascot, grey hat"
  },
  {
    "group": "Vtuber",
    "name": "兔田佩克拉",
    "prompt": "usada pekora, hololive, 1girl, rabbit ears, animal ear fluff, red eyes, orange eyes, hair between eyes, thick eyebrows, short eyebrows, rabbit-shaped pupils, blue hair, long hair, white hair, two-tone hair, carrot hair ornament, twin braids, twintails, small breasts, medium breasts, black gloves, virtual youtuber, rabbit girl"
  },
  {
    "group": "Vtuber",
    "name": "兔田佩克拉",
    "prompt": "pekomon \\(usada pekora\\), hololive, 1girl, rabbit ears, animal ear fluff, rabbit tail, red eyes, orange eyes, hair between eyes, thick eyebrows, short eyebrows, rabbit-shaped pupils, blue hair, white hair, two-tone hair, long hair, carrot hair ornament, twintails, twin braids, small breasts, medium breasts, white dress, black gloves, puffy short sleeves, bare shoulders, detached sleeves, virtual youtuber, rabbit girl, creature"
  },
  {
    "group": "Vtuber",
    "name": "兔田佩克拉",
    "prompt": "usada pekora \\(1st costume\\), hololive, 1girl, rabbit ears, animal ear fluff, rabbit tail, red eyes, orange eyes, hair between eyes, thick eyebrows, short eyebrows, rabbit-shaped pupils, blue hair, long hair, white hair, two-tone hair, carrot hair ornament, twin braids, twintails, small breasts, medium breasts, black gloves, black leotard, fur-trimmed gloves, black pantyhose, white dress, strapless leotard, fur scarf, detached sleeves, bare shoulders, puffy short sleeves, virtual youtuber, rabbit girl, playboy bunny"
  },
  {
    "group": "Vtuber",
    "name": "兔田佩克拉",
    "prompt": "usada pekora \\(casual\\), hololive, 1girl, rabbit ears, red eyes, orange eyes, hair between eyes, thick eyebrows, short eyebrows, rabbit-shaped pupils, blue hair, short hair, official alternate hairstyle, white hair, official alternate hair length, multicolored hair, long hair, carrot hair ornament, two side up, hair ribbon, white dress, blue jacket, open jacket, fur-trimmed jacket, white shirt, blue ribbon, white sailor collar, white choker, long sleeves, white belt, virtual youtuber, rabbit girl, blue neckerchief"
  },
  {
    "group": "Vtuber",
    "name": "兔田佩克拉",
    "prompt": "usada pekora \\(prisoner\\), hololive, 1girl, rabbit ears, orange eyes, red eyes, hair between eyes, thick eyebrows, short eyebrows, blue hair, long hair, white hair, two-tone hair, twintails, twin braids, small breasts, prison clothes, striped clothes, striped headwear, striped shirt, hat, long sleeves, metal collar, bare shoulders, virtual youtuber, rabbit girl, chain"
  },
  {
    "group": "Vtuber",
    "name": "兔田佩克拉",
    "prompt": "usada pekora \\(summer\\), hololive, 1girl, rabbit ears, animal ear fluff, extra ears, orange eyes, red eyes, thick eyebrows, short eyebrows, rabbit-shaped pupils, blue hair, short hair, official alternate hairstyle, white hair, two-tone hair, blunt bangs, small breasts, medium breasts, navel, blue bikini, visor cap, frilled bikini, side-tie bikini bottom, open jacket, virtual youtuber, rabbit girl, wet"
  },
  {
    "group": "Vtuber",
    "name": "白银诺艾尔",
    "prompt": "shirogane noel \\(5th costume\\), hololive, 1girl, green eyes, grey hair, official alternate hairstyle, long hair, official alternate hair length, medium hair, ponytail, braid, hair ribbon, thigh strap, white dress, detached sleeves, bare shoulders, virtual youtuber"
  },
  {
    "group": "Vtuber",
    "name": "湊阿库娅",
    "prompt": "minato aqua, hololive, 1girl, purple eyes, pink eyes, two-tone hair, blue hair, colored inner hair, streaked hair, long hair, purple hair, pink hair, ahoge, twintails, blunt bangs, braid, hair ribbon, medium breasts, blue ribbon, virtual youtuber, blue nails, nail polish, anchor symbol"
  },
  {
    "group": "Vtuber",
    "name": "常暗永远",
    "prompt": "bibi \\(tokoyami towa\\), hololive, 1girl, demon tail, demon girl, ear piercing, tail piercing, pointy ears, green eyes, purple hair, pink hair, streaked hair, long hair, colored inner hair, twintails, sidelocks, hairclip, medium breasts, navel piercing, navel, horned headwear, black headwear, white jacket, long sleeves, off shoulder, bare shoulders, black choker, virtual youtuber, nail polish, multicolored nails, black hat"
  },
  {
    "group": "Vtuber",
    "name": "鲨鱼Gura",
    "prompt": "gawr gura, hololive, 1girl, shark girl, shark tail, sharp teeth, blue eyes, streaked hair, blue hair, grey hair, long hair, medium hair, shark hair ornament, blunt bangs, two side up, blue hoodie, long sleeves, virtual youtuber, blue nails, fins"
  },
  {
    "group": "Vtuber",
    "name": "鲨鱼Gura",
    "prompt": "gawr gura \\(1st costume\\), hololive, 1girl, shark girl, shark tail, sharp teeth, blue eyes, streaked hair, blue hair, grey hair, medium hair, long hair, shark hair ornament, blunt bangs, two side up, blue hoodie, long sleeves, shark hood, wide sleeves, virtual youtuber, blue nails, fins, shark costume"
  },
  {
    "group": "Vtuber",
    "name": "鲨鱼Gura",
    "prompt": "gawr gura \\(3rd costume\\), hololive"
  },
  {
    "group": "Vtuber",
    "name": "鲨鱼Gura",
    "prompt": "gawr gura \\(new year\\), hololive, 1girl, shark girl, shark tail, sharp teeth, blue eyes, streaked hair, blue hair, grey hair, medium hair, two side up, ahoge, blunt bangs, hair ornament, blue kimono, detached sleeves, wide sleeves, long sleeves, virtual youtuber, blue nails, fins, shrimp, obi"
  },
  {
    "group": "Vtuber",
    "name": "鲨鱼Gura",
    "prompt": "gawr gura \\(school uniform\\), hololive, 1girl, shark girl, shark tail, sharp teeth, blue eyes, blue hair, streaked hair, grey hair, long hair, medium hair, white hair, blunt bangs, school uniform, white shirt, blue skirt, pleated skirt, collared shirt, yellow vest, short sleeves, virtual youtuber, blue nails, fins, one side up"
  },
  {
    "group": "Vtuber",
    "name": "戌神沁音",
    "prompt": "inugami korone, hololive, 1girl, dog girl, dog ears, dog tail, brown eyes, hair between eyes, brown hair, long hair, bone hair ornament, low twin braids, twin braids, medium breasts, yellow jacket, white dress, animal collar, red collar, virtual youtuber"
  },
  {
    "group": "Vtuber",
    "name": "天音彼方",
    "prompt": "amane kanata, hololive, 1girl, angel wings, angel, purple eyes, hair between eyes, blue eyes, hair over one eye, blue hair, grey hair, colored inner hair, single hair intake, streaked hair, short hair, long hair, official alternate hairstyle, pink hair, official alternate hair length, asymmetrical hair, asymmetrical bangs, bob cut, small breasts, star halo, virtual youtuber, feathered wings, white wings, mini wings"
  },
  {
    "group": "Vtuber",
    "name": "辉夜月",
    "prompt": "kaguya luna, the moon studio, 1girl, blue eyes, grey hair, long hair, twintails, hairclip, medium breasts, cutout, sleeveless dress, black dress, bare shoulders, virtual youtuber, obi"
  },
  {
    "group": "Vtuber",
    "name": "电脑少女Siro",
    "prompt": "siro \\(dennou shoujo youtuber siro\\), dennou shoujo youtuber siro"
  },
  {
    "group": "Vtuber",
    "name": "爱天使",
    "prompt": "natori sana, sana channel, 1girl, fang, red eyes, light brown hair, long hair, very long hair, brown hair, blonde hair, rabbit hair ornament, two side up, nurse cap, pink apron, pink headwear, puffy short sleeves, virtual youtuber, heart, bandaged arm, armband, pink hat"
  },
  {
    "group": "Vtuber",
    "name": "爱天使",
    "prompt": "nekomiya hinata, hinata channel, 1girl, cat ears, animal ear fluff, blue eyes, hair between eyes, pink hair, very long hair, long hair, ahoge, low twintails, hair bobbles, bike shorts, striped clothes, striped thighhighs, black shorts, black choker, bare shoulders, virtual youtuber, white tank top"
  },
  {
    "group": "Vtuber",
    "name": "喵坦莎（Nyanners）",
    "prompt": "nyatasha nyanners, vshojo, 1girl, cat girl, cat ears, animal ear fluff, cat tail, purple eyes, hair between eyes, pink hair, long hair, ahoge, hair bow, virtual youtuber"
  },
  {
    "group": "宝石之国",
    "name": "磷叶石（Phosphophyllite）",
    "prompt": "phosphophyllite \\(ll\\), houseki no kuni, 1other, heterochromia, blue eyes, colored eyelashes, blue hair, short hair, crystal hair, blunt bangs, necktie, golden arms, gold"
  },
  {
    "group": "宝石之国",
    "name": "辰砂",
    "prompt": "cinnabar \\(houseki no kuni\\), houseki no kuni, 1other, red eyes, hair between eyes, colored eyelashes, red hair, short hair, long hair, crystal hair, long bangs, ahoge, gem uniform (houseki no kuni), necktie, mercury (element)"
  },
  {
    "group": "宝石之国",
    "name": "金刚石（Diamond）",
    "prompt": "diamond \\(houseki no kuni\\), houseki no kuni, 1other, hair between eyes, multicolored eyes, colored eyelashes, short hair, crystal hair, rainbow hair, white hair, multicolored hair, gem uniform (houseki no kuni), collared shirt, elbow gloves, white gloves, white shirt, black necktie, puffy short sleeves"
  },
  {
    "group": "宝石之国",
    "name": "黑钻石（Bort）",
    "prompt": "bort, houseki no kuni, 1other, black eyes, black hair, very long hair, crystal hair, multicolored hair, gem uniform (houseki no kuni), elbow gloves, black gloves, black thighhighs, collared shirt, black necktie"
  },
  {
    "group": "宝石之国",
    "name": "黄钻",
    "prompt": "yellow diamond \\(houseki no kuni\\), houseki no kuni, 1other, yellow eyes, colored eyelashes, short hair, blonde hair, crystal hair, gem uniform (houseki no kuni), elbow gloves, black necktie"
  },
  {
    "group": "宝石之国",
    "name": "亚历山大石",
    "prompt": "alexandrite \\(houseki no kuni\\), houseki no kuni, 1other, blue eyes, red eyes, aqua eyes, colored eyelashes, crystal hair, blue hair, red hair, very long hair, long hair, aqua hair, gradient hair, two-tone hair, ahoge, gem uniform (houseki no kuni), short sleeves, black necktie, nail polish"
  },
  {
    "group": "宝石之国",
    "name": "金红石",
    "prompt": "rutile \\(houseki no kuni\\), houseki no kuni, 1other, yellow eyes, short hair, blonde hair, two-tone hair, red hair, crystal hair, brown hair, long hair, gem uniform (houseki no kuni), lab coat, black gloves, black necktie"
  },
  {
    "group": "宝石之国",
    "name": "硬玉",
    "prompt": "jade \\(houseki no kuni\\), houseki no kuni, 1other, green eyes, green hair, long hair, crystal hair, hair rings, gem uniform (houseki no kuni), white shirt, collared shirt, black shorts, black necktie, nail polish, green nails"
  },
  {
    "group": "宝石之国",
    "name": "幽灵水晶",
    "prompt": "ghost quartz \\(houseki no kuni\\), houseki no kuni, 1other, grey eyes, hair over one eye, colored eyelashes, short hair with long locks, short hair, white hair, grey hair, crystal hair, gem uniform (houseki no kuni), necktie, suspenders"
  },
  {
    "group": "宝石之国",
    "name": "南极石",
    "prompt": "antarcticite, houseki no kuni, 1other, blue eyes, grey eyes, colored eyelashes, short hair, white hair, crystal hair, gem uniform (houseki no kuni), black gloves, necktie"
  },
  {
    "group": "无职转生",
    "name": "洛琪希·米格路迪亚",
    "prompt": "roxy migurdia, mushoku tensei, 1girl, blue eyes, hair between eyes, blue hair, very long hair, long hair, twin braids, ahoge, crossed bangs, small breasts, witch hat, long sleeves"
  },
  {
    "group": "无职转生",
    "name": "爱丽丝·伯雷亚斯·格雷拉特",
    "prompt": "eris greyrat, mushoku tensei, 1girl, red eyes, hair between eyes, thick eyebrows, red hair, very long hair, long hair, black hairband, ahoge, small breasts, navel, white shirt"
  },
  {
    "group": "无职转生",
    "name": "希露菲叶特",
    "prompt": "sylphiette \\(mushoku tensei\\), mushoku tensei, 1girl, red eyes, short hair, white hair, green hair, ahoge, elf"
  },
  {
    "group": "埃罗芒阿老师",
    "name": "和泉纱雾",
    "prompt": "izumi sagiri, eromanga sensei, 1girl, blue eyes, grey hair, long hair, low-tied long hair, hair bow, small breasts, pink bow"
  },
  {
    "group": "埃罗芒阿老师",
    "name": "山田妖精",
    "prompt": "yamada elf, eromanga sensei, 1girl, pointy ears, brown eyes, blonde hair, long hair, drill hair, ponytail, hair bow, small breasts, navel, red bow, twin drills"
  },
  {
    "group": "埃罗芒阿老师",
    "name": "千寿村征",
    "prompt": "senju muramasa, eromanga sensei, 1girl, purple eyes, short hair, purple hair, blunt bangs, medium breasts, navel"
  },
  {
    "group": "埃罗芒阿老师",
    "name": "神野惠",
    "prompt": "jinno megumi, eromanga sensei, 1girl, brown eyes, orange eyes, orange hair, long hair, brown hair, ponytail, sidelocks, serafuku, pleated skirt"
  },
  {
    "group": "出包王女",
    "name": "菈菈·萨塔琳·戴比路克",
    "prompt": "lala satalin deviluke, to love-ru, 1girl, demon tail, green eyes, pink hair, long hair, very long hair, ahoge"
  },
  {
    "group": "出包王女",
    "name": "西连寺春菜",
    "prompt": "sairenji haruna, to love-ru, 1girl, purple eyes, short hair, purple hair, blue hair, hairclip, medium breasts, sainan high school uniform"
  },
  {
    "group": "出包王女",
    "name": "莫莫·贝利亚·戴比路克",
    "prompt": "momo velia deviluke, to love-ru, 1girl, demon tail, purple eyes, pink eyes, pink hair, short hair, medium breasts"
  },
  {
    "group": "出包王女",
    "name": "娜娜·阿丝塔·戴比路克",
    "prompt": "nana asta deviluke, to love-ru, 1girl, demon tail, fang, tail, pink eyes, purple eyes, pink hair, long hair, twintails, flat chest, navel"
  },
  {
    "group": "出包王女",
    "name": "金色暗影（结城美柑）",
    "prompt": "konjiki no yami, to love-ru, 1girl, red eyes, blonde hair, very long hair, long hair, two side up, hair intakes, small breasts, thigh strap"
  },
  {
    "group": "出包王女",
    "name": "黑咲芽亚",
    "prompt": "kurosaki mea, to love-ru, 1girl, blue eyes, hair between eyes, red hair, very long hair, ahoge, braid, hair ornament, medium breasts, small breasts, navel"
  },
  {
    "group": "出包王女",
    "name": "涅墨西斯",
    "prompt": "master nemesis, to love-ru, 1girl, dark-skinned female, yellow eyes, black hair, very long hair, long hair, two side up, small breasts"
  },
  {
    "group": "出包王女",
    "name": "兰·艾尔塔",
    "prompt": "run elsie jewelria, to love-ru, 1girl, purple eyes, green hair, long hair, antenna hair, medium breasts"
  },
  {
    "group": "小林家的龙女仆",
    "name": "托尔",
    "prompt": "tohru \\(maidragon\\), kobayashi-san chi no maidragon, 1girl, maid, maid headdress, dragon horns, dragon tail, large tail, fang, orange eyes, hair between eyes, red eyes, slit pupils, blonde hair, long hair, orange hair, gradient hair, very long hair, twintails, white gloves, elbow gloves, puffy short sleeves, dragon girl, scales"
  },
  {
    "group": "小林家的龙女仆",
    "name": "康娜·卡姆依",
    "prompt": "kanna kamui, kobayashi-san chi no maidragon, 1girl, loli, dragon horns, tail, blue eyes, long hair, purple hair, gradient hair, light purple hair, blunt bangs, low twintails, twintails, hair beads, hairband, white thighhighs, dragon girl"
  },
  {
    "group": "小林家的龙女仆",
    "name": "爱尔玛",
    "prompt": "elma \\(maidragon\\), kobayashi-san chi no maidragon, 1girl, office lady, single horn, dragon tail, dragon horns, blue eyes, short hair, black hair, gradient hair, purple hair, dragon girl"
  },
  {
    "group": "小林家的龙女仆",
    "name": "卢科亚（奎兹尔·科亚特尔）",
    "prompt": "lucoa \\(maidragon\\), kobayashi-san chi no maidragon, 1girl, heterochromia, dragon horns, horns through headwear, green eyes, hair between eyes, blonde hair, green hair, gradient hair, long hair, blue hair, navel, collarbone, baseball cap, bare shoulders, dragon girl"
  },
  {
    "group": "小林家的龙女仆",
    "name": "伊露露",
    "prompt": "ilulu \\(maidragon\\), kobayashi-san chi no maidragon, 1girl, dragon horns, pointy ears, sharp teeth, red eyes, pink eyes, slit pupils, long hair, pink hair, red hair, gradient hair, purple hair, twintails, navel, dragon girl, oppai loli, shortstack"
  },
  {
    "group": "小林家的龙女仆",
    "name": "小林",
    "prompt": "kobayashi \\(maidragon\\), kobayashi-san chi no maidragon, 1girl, brown eyes, red eyes, hair between eyes, glasses, red hair, long hair, ponytail, sweat, white shirt"
  },
  {
    "group": "小林家的龙女仆",
    "name": "才川莉子",
    "prompt": "saikawa riko, kobayashi-san chi no maidragon, 1girl, green eyes, brown hair, long hair, hair flower, green shirt, long sleeves"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "惠惠",
    "prompt": "megumin,kono subarashii sekai ni shukufuku wo!,1girl,red eyes,short hair,brown hair,short hair with long locks,black hair,sidelocks,small breasts,bandaged leg,collarbone,witch hat,red dress,fingerless gloves,black gloves,single_leg_black_thighhighs"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "阿库娅",
    "prompt": "aqua \\(konosuba\\),kono subarashii sekai ni shukufuku wo!,1girl,blue eyes,hair between eyes,blue hair,long hair,very long hair,hair rings,hair ornament,detached sleeves,white_thighhighs,long hair,blue eyes,hair ornament,very long hair,blue hair,hair rings,single hair ring,hair bobbles,skirt,shirt,thighhighs,bare shoulders,detached sleeves,white thighhighs,blue skirt,blue shirt,green bow"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "达克妮斯",
    "prompt": "darkness \\(konosuba\\), kono subarashii sekai ni shukufuku wo!, 1girl, blue eyes, hair between eyes, blonde hair, long hair, x hair ornament, ponytail, braid"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "芸芸",
    "prompt": "yunyun \\(konosuba\\),yunyun, black hair, hair ornament, red eyes, bow, braid, crown braid,skirt, thighhighs, long sleeves, necktie, belt, clothing cutout, cutout, pink skirt, pink necktie"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "爱丽丝",
    "prompt": "iris \\(konosuba\\), kono subarashii sekai ni shukufuku wo!, 1girl, blue eyes, hair between eyes, blonde hair, long hair, hair ornament, single braid, side braid, small breasts, navel"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "克莉丝",
    "prompt": "chris \\(konosuba\\), kono subarashii sekai ni shukufuku wo!, 1girl, purple eyes, hair between eyes, short hair, grey hair, small breasts, navel, scar on cheek, black gloves"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "萝莉莎 魅魔",
    "prompt": "shinjin succubus \\(konosuba\\), kono subarashii sekai ni shukufuku wo!, 1girl, demon girl, red eyes, hair between eyes, pink eyes, short hair, pink hair, white hair, gradient hair, small breasts, navel, collarbone, elbow gloves, black gloves, pink panties, black thighhighs, lingerie, bare shoulders, head wings"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "米米",
    "prompt": "komekko, kono subarashii sekai ni shukufuku wo!, 1girl, red eyes, black hair, short hair, brown hair, star hair ornament, low twintails, short twintails, white shirt, suspender skirt, long sleeves, child"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "维斯",
    "prompt": "wiz \\(konosuba\\), kono subarashii sekai ni shukufuku wo!, 1girl, brown eyes, yellow eyes, hair over one eye, brown hair, long hair, ahoge, thighs, navel, collarbone"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "露娜",
    "prompt": "luna \\(konosuba\\), kono subarashii sekai ni shukufuku wo!, 1girl, brown eyes, yellow eyes, blonde hair, long hair, folded ponytail, sidelocks, detached collar, bare shoulders"
  },
  {
    "group": "为美好的世界献上祝福",
    "name": "厄里斯",
    "prompt": "eris \\(konosuba\\), kono subarashii sekai ni shukufuku wo!, 1girl, blue eyes, hair between eyes, purple eyes, very long hair, white hair, silver hair, long hair, grey hair, long sleeves, habit"
  },
  {
    "group": "来自深渊",
    "name": "丽可",
    "prompt": "riko \\(made in abyss\\), made in abyss, 1girl, green eyes, glasses, blonde hair, long hair, low twintails, brown gloves, helmet, whistle around neck"
  },
  {
    "group": "来自深渊",
    "name": "娜娜奇",
    "prompt": "nanachi \\(made in abyss\\), made in abyss, 1other, animal ears, tail, rabbit ears, yellow eyes, horizontal pupils, white hair, long hair, short hair, furry, whiskers, brown fur, body fur"
  },
  {
    "group": "来自深渊",
    "name": "玛露露库",
    "prompt": "maruruk, made in abyss, 1boy, maid, maid headdress, blue eyes, blue hair, short hair, blue capelet, puffy short sleeves, child, whistle around neck, pouch"
  },
  {
    "group": "来自深渊",
    "name": "奥森",
    "prompt": "ozen, made in abyss, 1girl, hair between eyes, black eyes, short hair, two-tone hair, black hair, white hair, medium breasts, black cape, black gloves, black jacket, long sleeves"
  },
  {
    "group": "来自深渊",
    "name": "布耶可",
    "prompt": "vueko, made in abyss, 1girl, hair between eyes, red eyes, bags under eyes, white hair, red hair, streaked hair, two-tone hair, short hair, very long hair, medium breasts"
  },
  {
    "group": "来自深渊",
    "name": "普鲁修卡",
    "prompt": "prushka, made in abyss, 1girl, red eyes, hair between eyes, short hair, white hair, green hair, streaked hair, two-tone hair, medium breasts, hat, green headwear, green gloves, long sleeves, creature"
  },
  {
    "group": "来自深渊",
    "name": "法普塔",
    "prompt": "faputa, made in abyss, 1girl, dark-skinned female, monster girl, very dark skin, multiple tails, animal ears, yellow eyes, hair between eyes, goggles around breasts, white hair, short hair, navel, fewer digits, claws, white fur, body fur"
  },
  {
    "group": "绝区零",
    "name": "艾伦·乔",
    "prompt": "ellen joe, zenless zone zero, 1girl, shark girl, maid, maid headdress, shark tail, red eyes, hair between eyes, mole under eye, black hair, short hair, red hair, colored inner hair, two-tone hair, fins"
  },
  {
    "group": "绝区零",
    "name": "星见雅",
    "prompt": "hoshimi miyabi, zenless zone zero, 1girl, fox girl, fox ears, animal ear fluff, red eyes, black hair, long hair, very long hair, blunt bangs, sidelocks, white shirt, black skirt, black gloves, aqua jacket, collared shirt, black necktie, katana, half updo"
  },
  {
    "group": "绝区零",
    "name": "妮可·德玛拉",
    "prompt": "nicole demara, zenless zone zero, 1girl, green eyes, mole under eye, pink hair, long hair, very long hair, two side up, hair ribbon, hairclip, mole on breast, thighs, navel, black shorts, black thighhighs, black ribbon, bare shoulders, long sleeves, crop top, midriff, tube top, stomach"
  },
  {
    "group": "绝区零",
    "name": "猫宫又奈",
    "prompt": "nekomiya mana, zenless zone zero, 1girl, cat girl, dark-skinned female, cat ears, animal ear fluff, cat tail, two tails, red eyes, black hair, long hair, red hairband, ponytail, small breasts, forehead tattoo, black thighhighs, detached sleeves, bare shoulders, forehead mark, neck bell"
  },
  {
    "group": "碧蓝档案",
    "name": "砂狼白子",
    "prompt": "shiroko \\(cycling) (blue archive\\), blue archive, 1girl, wolf ears, animal ear fluff, extra ears, blue eyes, hair between eyes, mismatched pupils, grey hair, medium hair, cross hair ornament, medium breasts, sweat, cycling uniform, green gloves, bike shorts, halo, short sleeves, bike jersey"
  },
  {
    "group": "碧蓝档案",
    "name": "星野",
    "prompt": "hoshino \\(flowery charms) (blue archive\\), blue archive, 1girl, heterochromia, fang, hair between eyes, blue eyes, yellow eyes, pink hair, long hair, very long hair, official alternate hairstyle, star hair ornament, double bun, ahoge, huge ahoge, medium bangs, small breasts, thighs, barefoot, china dress, white dress, halo, pink halo, short sleeves"
  },
  {
    "group": "碧蓝档案",
    "name": "阿罗娜",
    "prompt": "arona \\(blue archive\\), blue archive, 1girl, blue eyes, hair over one eye, pink hair, short hair, blue hair, colored inner hair, two-tone hair, white hairband, single braid, serafuku, white skirt, blue shirt, halo, blue halo, white sailor collar, long sleeves, white choker"
  },
  {
    "group": "碧蓝档案",
    "name": "芹香",
    "prompt": "serika \\(swimsuit) (blue archive\\), blue archive, 1girl, cat ears, animal ear fluff, extra ears, red eyes, hair between eyes, black hair, very long hair, long hair, twintails, hair ribbon, small breasts, thighs, navel, collarbone, black bikini, frilled bikini, off-shoulder bikini, halo, pink halo, bare shoulders, stomach"
  },
  {
    "group": "碧蓝档案",
    "name": "伊津奈",
    "prompt": "izuna \\(swimsuit) (blue archive\\), blue archive, 1girl, fox girl, skin fang, fox ears, fox tail, animal ear fluff, yellow eyes, hair between eyes, short hair, brown hair, black hair, medium breasts, small breasts, thighs, navel, visor cap, striped bikini, striped clothes, denim shorts, short shorts, red scarf, micro shorts, blue shorts, highleg bikini, halo, pink halo, bare shoulders, stomach"
  },
  {
    "group": "碧蓝档案",
    "name": "日富美",
    "prompt": "hifumi \\(swimsuit) (blue archive\\), blue archive, 1girl, yellow eyes, hair between eyes, eyewear on head, round eyewear, light brown hair, long hair, low twintails, small breasts, navel, collarbone, frilled bikini, white bikini, sunglasses, side-tie bikini bottom, halo, yellow halo, bare shoulders, stomach"
  },
  {
    "group": "碧蓝档案",
    "name": "梓",
    "prompt": "kazusa \\(band) (blue archive\\), blue archive, 1girl, cat ears, extra ears, mouth mask, red eyes, pink eyes, black hair, short hair, pink hair, colored inner hair, two-tone hair, hairclip, thigh strap, white shirt, white skirt, black mask, jacket around waist, pleated skirt, black jacket, halo, pink halo, short sleeves, black choker"
  },
  {
    "group": "碧蓝档案",
    "name": "小春",
    "prompt": "koharu \\(blue archive\\), blue archive, 1girl, pink eyes, hair between eyes, pink hair, long hair, twintails, low twintails, small breasts, collarbone, black headwear, halo, pink halo, long sleeves, head wings, black wings, feathered wings, low wings, beret"
  },
  {
    "group": "碧蓝档案",
    "name": "小春（swiming）",
    "prompt": "koharu \\(swimsuit) (blue archive\\), blue archive, 1girl, pink eyes, hair between eyes, pink hair, long hair, low twintails, hair over shoulder, hair bow, small breasts, navel, collarbone, black bikini, print bikini, front-tie bikini top, halo, pink halo, black bow, head wings, black wings, feathered wings, low wings, spaghetti strap"
  },
  {
    "group": "碧蓝档案",
    "name": "花凛",
    "prompt": "karin \\(blue archive\\), blue archive, 1girl, dark-skinned female, rabbit ears, rabbit tail, fake animal ears, yellow eyes, black hair, very long hair, long hair, purple hair, ponytail, thighs, white gloves, black leotard, strapless leotard, halo, detached collar, bare shoulders, playboy bunny"
  },
  {
    "group": "孤独摇滚",
    "name": "后藤一里",
    "prompt": "gotoh hitori, bocchi the rock!, 1girl, blue eyes, hair between eyes, pink hair, long hair, cube hair ornament, pink jacket, track jacket, long sleeves, one side up"
  },
  {
    "group": "孤独摇滚",
    "name": "伊地知虹夏",
    "prompt": "ijichi nijika, bocchi the rock!, 1girl, red eyes, blonde hair, long hair, very long hair, side ponytail, ahoge, sidelocks, school uniform, white shirt, collared shirt, long sleeves"
  },
  {
    "group": "孤独摇滚",
    "name": "山田凉",
    "prompt": "yamada ryo, bocchi the rock!, 1girl, yellow eyes, mole under eye, blue hair, short hair, hairclip, school uniform, shimokitazawa high school uniform, white shirt, collared shirt, long sleeves"
  },
  {
    "group": "孤独摇滚",
    "name": "喜多郁代",
    "prompt": "kita ikuyo, bocchi the rock!, 1girl, green eyes, hair between eyes, red hair, long hair, shuka high school uniform, one side up"
  },
  {
    "group": "孤独摇滚",
    "name": "伊地知星歌",
    "prompt": "ijichi seika, bocchi the rock!, 1girl, red eyes, blonde hair, long hair, very long hair, ahoge, collarbone, long sleeves, black choker"
  },
  {
    "group": "更衣人偶坠入爱河",
    "name": "喜多川海梦（泳装）",
    "prompt": "kitagawa marin, sono bisque doll wa koi wo suru, 1girl, ear piercing, red eyes, blonde hair, long hair, gradient hair, medium breasts, thighs, navel, collarbone, school uniform, black bikini, black choker, nail polish, pink nails, earrings, barbell piercing, gyaru"
  },
  {
    "group": "更衣人偶坠入爱河",
    "name": "喜多川海梦（洛丽塔）",
    "prompt": "kuroe shizuku, sono bisque doll wa koi wo suru, 1girl, purple eyes, purple hair, short hair, medium hair, black hair, blunt bangs, hair flower, black dress, frilled dress, long sleeves, black necktie, detached collar, frilled sleeves, nail polish, gothic lolita, bonnet, wig, chain leash"
  },
  {
    "group": "更衣人偶坠入爱河",
    "name": "喜多川海梦（魅魔)",
    "prompt": "rizu-kyun, sono bisque doll wa koi wo suru, 1girl, demon girl, demon horns, demon wings, demon tail, pointy ears, fangs, black horns, green eyes, red hair, long hair, blunt bangs, two side up, sidelocks, twintails, medium breasts, thighs, navel, black panties, frilled panties, long sleeves, black nails, nail polish, black wings"
  },
  {
    "group": "天使降临到我身边",
    "name": "星野宫子",
    "prompt": "hoshino miyako \\(wataten\\), watashi ni tenshi ga maiorita!, 1girl, red eyes, hair over one eye, brown hair, short hair, track suit, red track suit, track jacket, red jacket, long sleeves"
  },
  {
    "group": "天使降临到我身边",
    "name": "白咲花",
    "prompt": "higero \\(wataten\\), watashi ni tenshi ga maiorita!, 1girl, hair between eyes, blue eyes, black hair, very long hair, hair flower, white shirt"
  },
  {
    "group": "天使降临到我身边",
    "name": "种村小依",
    "prompt": "tanemura koyori, watashi ni tenshi ga maiorita!, 1girl, fang, purple eyes, very long hair, pink hair, red hair, x hair ornament, twintails, school uniform, white shirt, long sleeves"
  },
  {
    "group": "天使降临到我身边",
    "name": "小之森枫",
    "prompt": "konomori kanon, watashi ni tenshi ga maiorita!, 1girl, hair between eyes, brown eyes, brown hair, light brown hair, short hair, ahoge, school uniform, white shirt, blue dress, sleeveless dress, white sailor collar, long sleeves, red bow"
  },
  {
    "group": "天使降临到我身边",
    "name": "星野日向",
    "prompt": "hoshino hinata, watashi ni tenshi ga maiorita!, 1girl, fang, red eyes, hair between eyes, brown hair, short hair, school uniform, white shirt, blue dress, long sleeves, one side up"
  },
  {
    "group": "天使降临到我身边",
    "name": "姬坂乃爱",
    "prompt": "himesaka noa, watashi ni tenshi ga maiorita!, 1girl, loli, green eyes, thick eyebrows, blonde hair, long hair, very long hair, ponytail, ahoge, hair bow, flat chest, school uniform, red bow"
  },
  {
    "group": "少女终末旅行",
    "name": "悠里",
    "prompt": "yuuri \\(shoujo shuumatsu ryokou\\), shoujo shuumatsu ryokou, 1girl, blue eyes, blonde hair, long hair, ahoge, long sleeves"
  },
  {
    "group": "少女终末旅行",
    "name": "千户",
    "prompt": "chito \\(shoujo shuumatsu ryokou\\), shoujo shuumatsu ryokou, 1girl, black eyes, black hair, long hair, low twintails, military uniform, combat helmet, long sleeves"
  },
  {
    "group": "转生史莱姆",
    "name": "利姆露·特恩佩斯特（女性形态）",
    "prompt": "rimuru tempest, tensei shitara slime datta ken, 1other, yellow eyes, hair between eyes, blue hair, long hair, very long hair, long sleeves"
  },
  {
    "group": "转生史莱姆",
    "name": "紫苑",
    "prompt": "shion \\(tensei shitara slime datta ken\\), tensei shitara slime datta ken, 1girl, oni, oni horns, single horn, black horns, purple eyes, purple hair, long hair, very long hair, ponytail, high ponytail, collarbone, purple suit, purple nails, formal"
  },
  {
    "group": "转生史莱姆",
    "name": "朱菜",
    "prompt": "shuna \\n(tensei shitara slime datta ken\\), tensei shitara slime datta ken, 1girl, oni, oni horns, hair between eyes, red eyes, pink eyes, pink hair, very long hair, long hair, medium breasts, collarbone, white kimono, long sleeves, wide sleeves, ribbon-trimmed sleeves, miko, red hakama"
  },
  {
    "group": "转生史莱姆",
    "name": "米莉姆·纳瓦",
    "prompt": "milim nava \\n(tensei shitara slime datta ken\\),blue eyes, hair between eyes, very long hair, twintails, pink hair, ahoge, fang, medium breasts,long sleeves, puffy sleeves, midriff, black jacket, crop top, black panties, thigh strap, striped thighhighs, single thighhigh, side-tie panties, bow panties, asymmetrical legwear, shrug (clothing), shoulder cutout, uneven legwear, thighlet, necklace"
  },
  {
    "group": "辉夜大小姐",
    "name": "四宫辉夜",
    "prompt": "shinomiya kaguya, kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~, 1girl, red eyes, black hair, short hair, parted bangs, folded ponytail, sidelocks, hair ribbon, small breasts, collarbone, shuuchiin academy school uniform, black dress, red ribbon"
  },
  {
    "group": "辉夜大小姐",
    "name": "早坂爱",
    "prompt": "hayasaka ai, kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~, 1girl, blue eyes, hair between eyes, blonde hair, long hair, side ponytail, sidelocks, hair scrunchie, medium breasts, thighs, collarbone, shuuchiin academy school uniform, white shirt, blue nails, nail polish, blue scrunchie"
  },
  {
    "group": "辉夜大小姐",
    "name": "早坂爱（皮肤）",
    "prompt": "haysaca a. smithee, kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~, 1girl, blue eyes, hair between eyes, blonde hair, long hair, single braid, parted bangs, medium breasts, navel, collarbone, serafuku, white shirt, pleated skirt, black skirt, short sleeves, blue sailor collar"
  },
  {
    "group": "辉夜大小姐",
    "name": "伊井野弥子",
    "prompt": "iino miko, kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~, 1girl, brown eyes, brown hair, long hair, low twintails, blunt bangs, medium breasts, collarbone, shuuchiin academy school uniform, black dress"
  },
  {
    "group": "辉夜大小姐",
    "name": "藤原千花",
    "prompt": "fujiwara chika, kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~, 1girl, blue eyes, pink hair, long hair, blunt bangs, hair bow, collarbone, shuuchiin academy school uniform, black dress, black bow"
  },
  {
    "group": "辉夜大小姐",
    "name": "白银圭",
    "prompt": "shirogane kei, kaguya-sama wa kokurasetai ~tensai-tachi no renai zunousen~, 1girl, blue eyes, hair between eyes, long hair, grey hair, white hair, black hairband, medium breasts, small breasts, collarbone, shuuchiin academy school uniform, white dress"
  },
  {
    "group": "游戏人生",
    "name": "白",
    "prompt": "shiro \\(no game no life\\), no game no life, 1girl, hair between eyes, yellow eyes, blue hair, very long hair, gradient hair, long hair, serafuku, crown"
  },
  {
    "group": "游戏人生",
    "name": "休比",
    "prompt": "shuvi \\(no game no life\\), no game no life, 1girl, hair between eyes, yellow eyes, purple hair, very long hair, long hair, gradient hair, long sleeves"
  },
  {
    "group": "游戏人生",
    "name": "吉普莉尔",
    "prompt": "jibril \\(no game no life\\), no game no life, 1girl, angel, angel wings, wing ears, bird ears, yellow eyes, orange eyes, symbol-shaped pupils, pink hair, very long hair, gradient hair, long hair, sideboob, navel, tattoo, gloves, spiked halo, feathered wings, low wings, white wings, midriff, crop top, cross"
  },
  {
    "group": "游戏人生",
    "name": "初濑伊纲",
    "prompt": "hatsuse izuna, no game no life, 1girl, fox girl, fox ears, animal ear fluff, fox tail, purple eyes, red eyes, hair between eyes, slit pupils, purple hair, short hair, gradient hair, short kimono"
  },
  {
    "group": "游戏人生",
    "name": "史蒂芬妮·多拉",
    "prompt": "stephanie dora, no game no life, 1girl, blue eyes, red hair, short hair, pink hair, hair flower, bare shoulders"
  },
  {
    "group": "nikke胜利女神",
    "name": "爱丽丝",
    "prompt": "alice \\(nikke\\), goddess of victory:nikke, 1girl, skin tight, animal ear headphones, pink eyes, long hair, pink hair, grey hair, white hair, twintails, sidelocks, medium breasts, covered navel, pink bodysuit, pink gloves, cropped jacket, latex bodysuit, impossible bodysuit, red jacket, pink headphones, shrug (clothing), two-tone gloves, long sleeves, headset"
  },
  {
    "group": "nikke胜利女神",
    "name": "爱丽丝",
    "prompt": "alice \\(wonderland bunny) (nikke\\), goddess of victory:nikke, 1girl, rabbit ears, rabbit tail, fake animal ears, pink eyes, long hair, pink hair, white hair, carrot hair ornament, twintails, covered navel, pink leotard, strapless leotard, detached collar, pink bowtie, bare shoulders, playboy bunny, wrist cuffs"
  },
  {
    "group": "nikke胜利女神",
    "name": "皮埃尔",
    "prompt": "laplace \\(nikke\\), goddess of victory:nikke, 1girl, fang, blue eyes, hair between eyes, blonde hair, long hair, twintails, sidelocks, small breasts, bandaid on cheek, armored bodysuit, black bodysuit, white coat, headgear"
  },
  {
    "group": "nikke胜利女神",
    "name": "伊原木",
    "prompt": "liter \\(nikke\\), goddess of victory:nikke, 1girl, yellow eyes, hair between eyes, blonde hair, short hair, small breasts, helmet, hard hat, open jacket, yellow bodysuit, brown jacket"
  },
  {
    "group": "nikke胜利女神",
    "name": "早乙女",
    "prompt": "mary \\(medical rabbit) (nikke\\), goddess of victory:nikke, 1girl, rabbit ears, rabbit tail, fake animal ears, black hair, long hair, rabbit hair ornament, braided ponytail, hair over shoulder, thighs, highleg leotard, elbow gloves, white gloves, white thighhighs, blue leotard, see-through leotard, meme attire, blue bowtie, detached collar, bare shoulders, playboy bunny, translucent bunnysuit, lanyard"
  },
  {
    "group": "nikke胜利女神",
    "name": "体积",
    "prompt": "volume \\(nikke\\), goddess of victory:nikke, 1girl, orange eyes, hair between eyes, yellow eyes, eyewear on head, red hair, long hair, sidelocks, thigh strap, red jacket, sunglasses, open jacket, black bikini, leather jacket, long sleeves, torn bodystocking"
  },
  {
    "group": "nikke胜利女神",
    "name": "蝰蛇",
    "prompt": "viper \\(toxic rabbit) (nikke\\), goddess of victory:nikke, 1girl, rabbit ears, pink horns, horns, rabbit tail, fake animal ears, pink eyes, red eyes, mole under eye, light brown hair, long hair, very long hair, blonde hair, sidelocks, thighs, pink leotard, highleg leotard, strapless leotard, bare shoulders, detached collar, pink bowtie, high heels, nail polish, playboy bunny, wrist cuffs, smartphone"
  },
  {
    "group": "别当欧尼酱了",
    "name": "绪山真寻",
    "prompt": "oyama mahiro, onii-chan wa oshimai!, 1girl, brown eyes, hair between eyes, pink hair, long hair, grey hair, ahoge"
  },
  {
    "group": "别当欧尼酱了",
    "name": "绪山美波里",
    "prompt": "oyama mihari, onii-chan wa oshimai!, 1girl, brown eyes, hair between eyes, black hair, purple hair, two-tone hair, long hair, twintails, hair ribbon, hairclip, medium breasts, lab coat, red ribbon, long sleeves"
  },
  {
    "group": "别当欧尼酱了",
    "name": "樱花朝日",
    "prompt": "oka asahi, onii-chan wa oshimai!, 1girl, fang, green eyes, brown hair, two-tone hair, short hair, colored inner hair, orange hair, two side up, hair intakes, long sleeves"
  },
  {
    "group": "别当欧尼酱了",
    "name": "室崎美夜",
    "prompt": "murosaki miyo, onii-chan wa oshimai!, 1girl, brown eyes, hair between eyes, red eyes, brown hair, red hair, long hair, two-tone hair, low twintails, long sleeves, dot nose"
  },
  {
    "group": "别当欧尼酱了",
    "name": "天川那由多",
    "prompt": "tenkawa nayuta, onii-chan wa oshimai!, 1girl, green eyes, hair between eyes, blue hair, long hair, two-tone hair, colored inner hair, aqua hair, hairclip, long sleeves, dot nose"
  },
  {
    "group": "别当欧尼酱了",
    "name": "穗月红叶",
    "prompt": "hozuki momiji, onii-chan wa oshimai!, 1girl, brown eyes, red eyes, brown hair, two-tone hair, blue hair, short hair, colored inner hair, blunt bangs, short ponytail, long sleeves, blunt ends"
  },
  {
    "group": "别当欧尼酱了",
    "name": "穗月枫",
    "prompt": "hozuki kaede, onii-chan wa oshimai!, 1girl, pink eyes, hair between eyes, pink hair, two-tone hair, long hair, blue hair, side ponytail, sidelocks, hair intakes, hair flower, thighs, navel, collarbone, green bikini, bare shoulders, nail polish, pink nails, necklace"
  },
  {
    "group": "new game!",
    "name": "涩谷青叶",
    "prompt": "suzukaze aoba, new game!, 1girl, purple eyes, purple hair, long hair, very long hair, twintails, hair flower, small breasts"
  },
  {
    "group": "new game!",
    "name": "泷本日富美",
    "prompt": "takimoto hifumi, new game!, 1girl, blue eyes, brown hair, long hair, purple hair, very long hair, ponytail, blunt bangs, sidelocks, mole on breast"
  },
  {
    "group": "new game!",
    "name": "八神光",
    "prompt": "yagami kou, new game!, 1girl, blue eyes, hair between eyes, blonde hair, long hair, very long hair, ahoge, collarbone"
  },
  {
    "group": "new game!",
    "name": "篠田初",
    "prompt": "shinoda hajime, new game!, 1girl, green eyes, blue eyes, hair between eyes, brown hair, short hair, ahoge, navel, collarbone"
  },
  {
    "group": "new game!",
    "name": "樱宁宁",
    "prompt": "sakura nene, new game!, 1girl, blue eyes, blonde hair, long hair, low twintails, twintails, hair bobbles"
  },
  {
    "group": "new game!",
    "name": "饭岛结音",
    "prompt": "iijima yun, new game!, 1girl, red eyes, blonde hair, short hair, two side up"
  },
  {
    "group": "new game!",
    "name": "阿波根海子",
    "prompt": "ahagon umiko, new game!, 1girl, dark-skinned female, blue eyes, hair between eyes, brown hair, long hair, low-tied long hair, x hair ornament"
  },
  {
    "group": "龙王的工作！",
    "name": "空银子",
    "prompt": "sora ginko, ryuuou no oshigoto!, 1girl, blue eyes, hair between eyes, v-shaped eyebrows, short hair, grey hair, blue hair, black hairband, snowflake hair ornament, hair intakes, long sleeves"
  },
  {
    "group": "龙王的工作！",
    "name": "雏鹤爱",
    "prompt": "hinatsuru ai, ryuuou no oshigoto!, 1girl, loli, blue eyes, brown hair, very long hair, low twintails, ahoge, school uniform, blue dress, white headwear, short over long sleeves, puffy short sleeves, beret"
  },
  {
    "group": "龙王的工作！",
    "name": "夏洛特·伊索阿尔德",
    "prompt": "charlotte izoard, ryuuou no oshigoto!, 1girl, loli, blue eyes, blonde hair, very long hair, long hair, two side up, ahoge, white dress, collared shirt, black shirt, black ribbon, long sleeves"
  },
  {
    "group": "龙王的工作！",
    "name": "夜叉神天衣",
    "prompt": "yashajin ai, ryuuou no oshigoto!, 1girl, red eyes, hair between eyes, brown hair, red hair, very long hair, gradient hair, black hair, long hair, parted bangs, sidelocks, hair bow, white shirt, black jacket, black skirt, brown vest, red bow, short over long sleeves, one side up"
  },
  {
    "group": "妖精的尾巴",
    "name": "艾尔莎·斯卡雷特",
    "prompt": "erza scarlet, fairy tail, 1girl, brown eyes, hair over one eye, red hair, long hair"
  },
  {
    "group": "妖精的尾巴",
    "name": "茱比亚·洛克瑟",
    "prompt": "juvia lockser, fairy tail, 1girl, blue eyes, hair between eyes, blue hair, long hair"
  },
  {
    "group": "妖精的尾巴",
    "name": "露西·哈特菲利亚",
    "prompt": "lucy heartfilia, fairy tail, 1girl, brown eyes, blonde hair, long hair, twintails, navel"
  },
  {
    "group": "妖精的尾巴",
    "name": "梅比斯·维米利欧",
    "prompt": "mavis vermilion, fairy tail, 1girl, green eyes, hair between eyes, blonde hair, very long hair, long hair, ahoge, small breasts, barefoot, head wings"
  },
  {
    "group": "妖精的尾巴",
    "name": "米拉杰·斯特劳斯",
    "prompt": "mirajane strauss, fairy tail, 1girl, blue eyes, long hair, white hair, navel, topknot"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "灰川真珠",
    "prompt": "akoya matama, mahou shoujo ni akogarete, 1girl, fang, green eyes, hair between eyes, brown hair, streaked hair, long hair, green hair, two-tone hair, two side up, neck tattoo, star tattoo, black thighhighs, black bikini, bikini top only, high-waist skirt, star hat ornament, long sleeves, black sailor collar, nail polish, magical girl, blue neckerchief, white hat"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "有明奇异果",
    "prompt": "araga kiwi, mahou shoujo ni akogarete, 1girl, red eyes, purple eyes, empty eyes, mole under eye, green hair, medium hair, double bun, navel, thigh boots, black panties, green jacket, green headwear, military hat, long sleeves"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "花菱遥",
    "prompt": "hanabishi haruka, mahou shoujo ni akogarete, 1girl, green eyes, blue eyes, pink hair, long hair, medium hair, twintails, hair bow, medium breasts, navel, pink gloves, elbow gloves, pink footwear, pink dress, twin drills, magical girl, heart maebari"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "柊羽衣",
    "prompt": "hiiragi utena, mahou shoujo ni akogarete, 1girl, demon wings, yellow horns, horns, fangs, yellow eyes, cross-shaped pupils, short hair, black hair, purple hair, ahoge, medium breasts, small breasts, navel, breastless clothes, shrug (clothing), showgirl skirt, lowleg pants, revealing clothes, black nails, low wings, magical girl, cross pasties, star pasties, facial mark, corset, white shrug, cross"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "豹",
    "prompt": "leopard \\(mahou shoujo ni akogarete\\), mahou shoujo ni akogarete"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "豹德",
    "prompt": "leoparde \\(mahou shoujo ni akogarete\\), mahou shoujo ni akogarete, 1girl, red eyes, purple eyes, empty eyes, mole under eye, green hair, medium hair, blonde hair, double bun, thighs, thigh boots, navel, black panties, green jacket, green headwear, military hat, no pants, green footwear, very long sleeves, long sleeves, magical girl, green hat"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "魔法少女拜瑟",
    "prompt": "magia baiser, mahou shoujo ni akogarete, 1girl, demon wings, demon horns, yellow horns, horns, fangs, yellow eyes, cross-shaped pupils, star-shaped pupils, black hair, short hair, purple hair, ahoge, medium breasts, small breasts, navel, breastless clothes, shrug (clothing), lowleg pants, showgirl skirt, revealing clothes, purple pants, black nails, low wings, magical girl, cross pasties, star pasties, facial mark, corset, white shrug, purple corset, cross"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "魔法少女玛姬塔",
    "prompt": "magia magenta, mahou shoujo ni akogarete, 1girl, green eyes, blue eyes, pink hair, long hair, medium hair, twintails, hair bow, medium breasts, navel, pink gloves, elbow gloves, pink footwear, twin drills, magical girl, heart maebari"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "水上沙代",
    "prompt": "minakami sayo, mahou shoujo ni akogarete, 1girl, red eyes, hair between eyes, green hair, long hair, very long hair, aqua hair, blue hair, medium breasts, white shirt, blue footwear, blue gloves, magical girl"
  },
  {
    "group": "憧憬成为魔法少女",
    "name": "森野小栗鼠",
    "prompt": "morino korisu, mahou shoujo ni akogarete, 1girl, red eyes, pink eyes, blonde hair, very long hair, long hair, hair bow, blue dress, white apron, forehead mark"
  },
  {
    "group": "日常",
    "name": "相生祐子",
    "prompt": "aioi yuuko, nichijou, 1girl, brown eyes, brown hair, short hair, tokisadame school uniform"
  },
  {
    "group": "日常",
    "name": "安中春菜",
    "prompt": "annaka haruna, nichijou, 1girl, blonde hair, short hair, hair bow, tokisadame school uniform"
  },
  {
    "group": "日常",
    "name": "水上麻衣",
    "prompt": "minakami mai, nichijou, 1girl, black eyes, glasses, long hair, black hair, tokisadame school uniform"
  },
  {
    "group": "日常",
    "name": "长野原美绪",
    "prompt": "naganohara mio, nichijou, 1girl, blue eyes, blue hair, short hair, cube hair ornament, short twintails, tokisadame school uniform"
  },
  {
    "group": "日常",
    "name": "东云教授",
    "prompt": "professor shinonome, nichijou, 1girl, blue eyes, long hair, orange hair, blonde hair, lab coat"
  },
  {
    "group": "日常",
    "name": "东云名乃",
    "prompt": "shinonome nano, nichijou, 1girl, black eyes, black hair, short hair, tokisadame school uniform, winding key"
  },
  {
    "group": "日常",
    "name": "橘美里",
    "prompt": "tachibana misato, nichijou, 1girl, brown eyes, short hair, pink hair, brown hair, tokisadame school uniform, serafuku"
  },
  {
    "group": "调教咖啡厅",
    "name": "樱之宫真冬",
    "prompt": "sakuranomiya maika, blend s, 1girl, purple eyes, very long hair, long hair, black hair, purple hair, low twintails, blunt bangs, stile uniform, white gloves, white thighhighs, pink shirt, pink skirt, puffy short sleeves, waitress"
  },
  {
    "group": "调教咖啡厅",
    "name": "星川麻冬",
    "prompt": "hoshikawa mafuyu, blend s, 1girl, purple eyes, hair between eyes, brown hair, short hair, hair ribbon, stile uniform, white gloves, black ribbon, waitress"
  },
  {
    "group": "调教咖啡厅",
    "name": "日向夏帆",
    "prompt": "hinata kaho, blend s, 1girl, blue eyes, hair between eyes, blonde hair, very long hair, long hair, twintails, stile uniform, white gloves, white thighhighs, waitress"
  },
  {
    "group": "斩·赤红之瞳!",
    "name": "赤瞳",
    "prompt": "akame \\(akame ga kill!\\), akame ga kill!, 1girl, red eyes, hair between eyes, black hair, long hair, medium breasts, bare shoulders, katana"
  },
  {
    "group": "斩·赤红之瞳!",
    "name": "切尔茜",
    "prompt": "chelsea \\(akame ga kill!\\), akame ga kill!, 1girl, red eyes, hair between eyes, long hair, orange hair, headphones, white shirt, plaid skirt, long sleeves"
  },
  {
    "group": "斩·赤红之瞳!",
    "name": "艾斯德斯",
    "prompt": "esdeath, akame ga kill!, 1girl, blue eyes, hair between eyes, blue hair, very long hair, long hair, thigh boots, military uniform, peaked cap"
  },
  {
    "group": "猫娘乐园",
    "name": "香草",
    "prompt": "vanilla \\(nekopara\\), nekopara, 1girl, cat girl, cat ears, cat tail, animal ear fluff, blue eyes, slit pupils, white hair, very long hair, low twintails, blunt bangs, hair bow, small breasts, jingle bell, neck bell"
  },
  {
    "group": "猫娘乐园",
    "name": "巧克力",
    "prompt": "chocola \\(nekopara\\), nekopara, 1girl, cat girl, cat ears, cat tail, animal ear fluff, brown eyes, slit pupils, brown hair, very long hair, twintails, blunt bangs, small breasts, medium breasts, jingle bell"
  },
  {
    "group": "天降之物",
    "name": "阿斯特蕾亚",
    "prompt": "astraea \\(sora no otoshimono\\), sora no otoshimono, 1girl, angel wings, red eyes, blonde hair, very long hair, long hair, navel, collar, chain"
  },
  {
    "group": "天降之物",
    "name": "伊卡洛斯",
    "prompt": "ikaros, sora no otoshimono, 1girl, angel wings, robot ears, green eyes, pink hair, very long hair, long hair, ahoge, twintails, navel, collar, feathered wings, chain"
  },
  {
    "group": "天降之物",
    "name": "宁芙",
    "prompt": "nymph \\(sora no otoshimono\\), sora no otoshimono, 1girl, blue eyes, blue hair, long hair, very long hair, twintails, small breasts, thighhighs, metal collar, wings, chain"
  },
  {
    "group": "妖狐×仆SS",
    "name": "露露宫华恋",
    "prompt": "roromiya karuta, inu x boku ss, 1girl, pink eyes, red eyes, pink hair, twintails, school uniform"
  },
  {
    "group": "妖狐×仆SS",
    "name": "白鬼院凛凛蝶",
    "prompt": "shirakiin ririchiyo, inu x boku ss, 1girl, purple eyes, long hair, black hair, purple hair, very long hair, black thighhighs"
  },
  {
    "group": "GJ部",
    "name": "天音真央",
    "prompt": "amatsuka mao, gj-bu, 1girl, fang, brown eyes, v-shaped eyebrows, orange hair, long hair, very long hair, hair flaps, school uniform, plaid skirt, black thighhighs, blazer"
  },
  {
    "group": "GJ部",
    "name": "天音惠",
    "prompt": "amatsuka megumi \\(gj-bu\\), gj-bu, 1girl, pink eyes, pink hair, short hair, folded ponytail, hair bow, school uniform, long sleeves"
  },
  {
    "group": "GJ部",
    "name": "神无月环",
    "prompt": "kannazuki tamaki, gj-bu, 1girl, green eyes, green hair, short hair, twintails, ahoge, hair bell, school uniform, jingle bell"
  },
  {
    "group": "GJ部",
    "name": "绮罗拉·伯恩斯坦",
    "prompt": "kirara bernstein, gj-bu, 1girl, blue eyes, blonde hair, short hair, school uniform"
  },
  {
    "group": "GJ部",
    "name": "皇紫音",
    "prompt": "sumeragi shion, gj-bu, 1girl, purple eyes, purple hair, very long hair, long hair, school uniform, long sleeves"
  },
  {
    "group": "狂赌之渊",
    "name": "蛇喰梦子",
    "prompt": "jabami yumeko, kakegurui, 1girl, lips, red eyes, black hair, very long hair, long hair, blunt bangs, hyakkaou academy school uniform, red jacket, white shirt, collared shirt, black pantyhose, pleated skirt, nail polish, hime cut, blazer"
  },
  {
    "group": "狂赌之渊",
    "name": "桃喰绮罗莉",
    "prompt": "momobami kirari, kakegurui, 1girl, aqua lips, blue lips, blue eyes, aqua eyes, grey hair, short hair, white hair, braided hair rings, blunt bangs, braid, hair rings, hair ribbon, medium breasts, hyakkaou academy school uniform, red jacket, white shirt, collared shirt, black ribbon, long sleeves, nail polish, blue nails, aqua nails, lipstick, blazer"
  },
  {
    "group": "狂赌之渊",
    "name": "早乙女芽亚里",
    "prompt": "saotome mary, kakegurui, 1girl, hair between eyes, yellow eyes, brown eyes, blonde hair, long hair, twintails, hair ribbon, hyakkaou academy school uniform, red jacket, pleated skirt, white shirt, collared shirt, black ribbon, long sleeves, blazer"
  },
  {
    "group": "俺，想成为双马尾",
    "name": "尾蓝",
    "prompt": "tailblue, ore twintail ni narimasu, 1girl, blue eyes, hair between eyes, blue hair, very long hair, long hair, twintails, flat chest, small breasts, navel cutout, navel, leotard, elbow gloves, revealing clothes, thighhighs, white thighhighs, bare shoulders, mecha musume, magical girl, headgear"
  },
  {
    "group": "俺，想成为双马尾",
    "name": "尾红",
    "prompt": "tailred, ore twintail ni narimasu, 1girl, red eyes, purple eyes, hair between eyes, red hair, gradient hair, very long hair, antenna hair, blonde hair, long hair, twintails, flat chest, covered navel, leotard, elbow gloves, bare shoulders, magical girl, headgear"
  },
  {
    "group": "变态王子与不笑猫",
    "name": "筱仓梓",
    "prompt": "azuki azusa, hentai ouji to warawanai neko., 1girl, green eyes, blonde hair, long hair, hair bow, black thighhighs"
  },
  {
    "group": "变态王子与不笑猫",
    "name": "筒隐月子",
    "prompt": "tsutsukakushi tsukiko, hentai ouji to warawanai neko., 1girl, blue eyes, short hair, black hair, brown hair, hairclip, school uniform, one side up"
  },
  {
    "group": "Urara迷路帖",
    "name": "千矢",
    "prompt": "chiya \\(urara meirochou\\), urara meirochou, 1girl, fang, hair between eyes, red eyes, white hair, very long hair, long hair, ahoge, medium breasts, navel, collarbone, black shirt"
  },
  {
    "group": "Urara迷路帖",
    "name": "巽绀",
    "prompt": "tatsumi kon, urara meirochou, 1girl, green eyes, long hair, brown hair, black hair, sidelocks, hair bow, multicolored kimono, black bow, half updo"
  },
  {
    "group": "Urara迷路帖",
    "name": "雪见小梅",
    "prompt": "yukimi koume, urara meirochou, 1girl, hair between eyes, red eyes, black hair, long hair, purple hair, twintails, sidelocks, white kimono, sleeveless shirt, bare shoulders, off shoulder, wide sleeves, long sleeves"
  },
  {
    "group": "异种族风俗娘评鉴指南",
    "name": "克林梅尔",
    "prompt": "crimvael, ishuzoku reviewers, 1other, angel, angel wings, blue eyes, blonde hair, long hair, small breasts, white dress, black shorts, bike shorts, broken halo, bare shoulders"
  },
  {
    "group": "异种族风俗娘评鉴指南",
    "name": "梅德利",
    "prompt": "meidri, ishuzoku reviewers, 1girl, monster girl, maid, maid headdress, red eyes, orange hair, short hair, flipped hair, bird legs, thigh strap, juliet sleeves, feathered wings, white wings, half-harpy"
  },
  {
    "group": "漆黑的子弹",
    "name": "藍原延珠",
    "prompt": "aihara enju, black bullet, 1girl, brown eyes, long hair, orange hair, very long hair, brown hair, twintails, hair ornament"
  },
  {
    "group": "漆黑的子弹",
    "name": "蒂娜·斯普劳特",
    "prompt": "tina sprout, black bullet, 1girl, loli, blue eyes, blonde hair, long hair, hair ornament, small breasts"
  },
  {
    "group": "异世界魔王与召唤少女的奴隶",
    "name": "谢拉·L·格林伍德",
    "prompt": "shera l. greenwood, isekai maou to shoukan shoujo no dorei majutsu, 1girl, blue eyes, blonde hair, long hair, hairband, navel, elbow gloves, white gloves, white thighhighs, metal collar, elf"
  },
  {
    "group": "异世界魔王与召唤少女的奴隶",
    "name": "蕾姆·盖鲁",
    "prompt": "rem galeu, isekai maou to shoukan shoujo no dorei majutsu, 1girl, cat girl, cat ears, animal ear fluff, cat tail, green eyes, hair between eyes, black hair, long hair, very long hair, flat chest, small breasts, navel, metal collar"
  },
  {
    "group": "异世界魔王与召唤少女的奴隶",
    "name": "洛珊娜《异世界迷宫里的后宫生活》角",
    "prompt": "roxanne \\(isekai meikyuu de harem wo\\), isekai meikyuu de harem wo, 1girl, dog girl, shiny skin, dog ears, floppy ears, dog tail, brown eyes, hair between eyes, yellow eyes, orange hair, blonde hair, short hair, long hair, black hairband, thighs, navel, black collar, o-ring collar, bare shoulders, orange fur, stomach"
  },
  {
    "group": "不正经的魔术讲师与禁忌教典",
    "name": "鲁米娅·廷古尔",
    "prompt": "rumia tingel, rokudenashi majutsu koushi to akashic record, 1girl, blue eyes, hair between eyes, blonde hair, short hair, hair bow, medium breasts, navel, collarbone, alzano school uniform, pleated skirt, midriff, garter straps"
  },
  {
    "group": "不正经的魔术讲师与禁忌教典",
    "name": "希丝缇娜·菲贝尔",
    "prompt": "sistine fibel, rokudenashi majutsu koushi to akashic record, 1girl, green eyes, hair between eyes, long hair, silver hair, white hair, very long hair, ahoge, hair ribbon, hairband, small breasts, navel, alzano school uniform, pleated skirt, white skirt, midriff, garter straps, miniskirt"
  },
  {
    "group": "咩咩启示录",
    "name": "羔羊",
    "prompt": "the lamb \\(cult of the lamb\\), cult of the lamb, 1girl, sheep girl, furry female, black skin, sheep ears, sheep horns, horns, red eyes, horizontal pupils, white hair, short hair, red capelet, red cape, neck bell"
  },
  {
    "group": "咩咩启示录",
    "name": "红冠",
    "prompt": "red crown \\(cult of the lamb\\), cult of the lamb, 1girl, sheep girl, furry female, black skin, sheep ears, sheep horns, horns, red eyes, horizontal pupils, white hair, short hair, red cape, neck bell, crown"
  },
  {
    "group": "时雨羽衣",
    "name": "时雨羽衣（幼年）",
    "prompt": "shigure ui \\(vtuber) (young\\), indie virtual youtuber, 1girl, green eyes, blonde hair, short hair, light brown hair, pom pom hair ornament, twintails, blunt bangs, school uniform, white shirt, pinafore dress, blue dress, collared shirt, pleated dress, long sleeves, red bowtie, virtual youtuber, red bag, crime prevention buzzer, randoseru"
  },
  {
    "group": "时雨羽衣",
    "name": "时雨羽衣",
    "prompt": "shigure ui \\(vtuber\\), indie virtual youtuber, 1girl, green eyes, short hair, blonde hair, light brown hair, pom pom hair ornament, twintails, blunt bangs, school uniform, white shirt, collared shirt, long sleeves, virtual youtuber"
  },
  {
    "group": "斩服少女",
    "name": "针目缝",
    "prompt": "harime nui, kill la kill, 1girl, blue eyes, eyepatch, blonde hair, big hair, long hair, twintails, hair bow, strapless dress, pink footwear, boots, pink dress, pink bow, huge bow, earrings, twin drills, wrist cuffs, heart"
  },
  {
    "group": "斩服少女",
    "name": "蛇崩乃音",
    "prompt": "jakuzure nonon, kill la kill, 1girl, pink eyes, pink hair, short hair, sidelocks, small breasts, shako cap, conductor baton"
  },
  {
    "group": "斩服少女",
    "name": "蛇崩乃音・交响乐团形态",
    "prompt": "jakuzure nonon \\(symphony regalia\\), kill la kill, 1girl, pink eyes, pink hair, short hair, sidelocks, small breasts, medium breasts, underboob, navel, shako cap, thighhighs, revealing clothes, conductor baton, heart, c-string"
  },
  {
    "group": "斩服少女",
    "name": "纯洁，鬼龙院皐月的神衣",
    "prompt": "junketsu, kill la kill, 1girl, blue eyes, thick eyebrows, black hair, long hair, thigh boots, navel, revealing clothes, thighhighs"
  },
  {
    "group": "斩服少女",
    "name": "满舰饰真子",
    "prompt": "mankanshoku mako, kill la kill, 1girl, brown eyes, short hair, brown hair, bob cut, serafuku, hat, blue skirt"
  },
  {
    "group": "斩服少女",
    "name": "纏流子",
    "prompt": "matoi ryuuko, kill la kill, 1girl, blue eyes, black hair, short hair, red hair, two-tone hair, streaked hair, medium breasts, navel, suspenders, scissor blade (kill la kill)"
  },
  {
    "group": "斩服少女",
    "name": "鲜血，流子的神衣",
    "prompt": "senketsu, kill la kill, 1girl, blue eyes, black hair, short hair, red hair, two-tone hair, streaked hair, medium breasts, underboob, navel, serafuku, revealing clothes, suspenders, scissor blade (kill la kill), midriff"
  },
  {
    "group": "love live!",
    "name": "南小鸟",
    "prompt": "minami kotori, love live!, 1girl, brown eyes, yellow eyes, long hair, brown hair, hair bow, medium breasts, one side up"
  },
  {
    "group": "love live!",
    "name": "矢泽妮可",
    "prompt": "yazawa nico, love live!, 1girl, red eyes, black hair, long hair, twintails, hair bow"
  },
  {
    "group": "love live!",
    "name": "岚千砂都",
    "prompt": "arashi chisato, love live!, 1girl, red eyes, white hair, long hair, double bun, blunt bangs, twintails, yuigaoka school uniform, single sidelock"
  },
  {
    "group": "蒂法",
    "name": "最经典的造型",
    "prompt": "tifa lockhart, final fantasy, 1girl, red eyes, brown eyes, black hair, long hair, low-tied long hair, brown hair, navel, fingerless gloves, elbow gloves, black skirt, suspender skirt, bare shoulders, earrings, crop top, midriff"
  },
  {
    "group": "蒂法",
    "name": "乡村风格",
    "prompt": "tifa lockhart \\(cowgirl\\), final fantasy, 1girl, red eyes, brown eyes, long hair, black hair, brown hair, swept bangs, medium breasts, navel, cowboy hat, brown vest, brown skirt, black gloves, white shirt, bare shoulders, belt, cowgirl (western), crop top, midriff, miniskirt"
  },
  {
    "group": "蒂法",
    "name": "礼服造型",
    "prompt": "tifa lockhart \\(exotic dress\\), final fantasy, 1girl, red eyes, black hair, long hair, hair flower, black kimono, short kimono, black thighhighs, wide sleeves, zettai ryouiki, obi"
  },
  {
    "group": "蒂法",
    "name": "圣诞节",
    "prompt": "tifa lockhart \\(fairy of the holy flame\\), final fantasy, 1girl, red eyes, black hair, low-tied long hair, very long hair, brown hair, pom pom hair ornament, swept bangs, red capelet, santa hat, fur-trimmed capelet, fur-trimmed headwear, white sweater, turtleneck sweater, fur-trimmed skirt, red skirt, fur-trimmed gloves, red headwear, backless outfit, black gloves, sleeveless turtleneck, santa costume, miniskirt, red hat, holly hat ornament"
  },
  {
    "group": "蒂法",
    "name": "黑色比基尼",
    "prompt": "tifa lockhart \\(lifeguard\\), final fantasy, 1girl, red eyes, brown eyes, black hair, low-tied long hair, very long hair, brown hair, swept bangs, thighs, navel, collarbone, black bikini, baseball cap, bikini under clothes, see-through shirt, fingerless gloves, white shirt, wet shirt, side-tie bikini bottom, denim skirt, tied shirt, highleg bikini, black gloves, grey skirt, two-tone headwear, short sleeves, single sidelock, crop top, elbow pads, whistle around neck, miniskirt, midriff, stomach, front-tie top"
  },
  {
    "group": "蒂法",
    "name": "紫色或蓝色短礼服",
    "prompt": "tifa lockhart \\(refined dress\\), final fantasy, 1girl, red eyes, brown eyes, black hair, long hair, brown hair, swept bangs, purple dress, blue dress, short dress, sleeveless dress, bare shoulders, crescent earrings"
  },
  {
    "group": "蒂法",
    "name": "白色或浅色比基尼",
    "prompt": "tifa lockhart \\(shining spirit\\), final fantasy, 1girl, red eyes, brown eyes, black hair, long hair, official alternate hairstyle, brown hair, sidelocks, hair flower, thighs, navel, collarbone, frilled bikini, white bikini, bikini skirt, bare shoulders, beach"
  },
  {
    "group": "蒂法",
    "name": "旗袍风格",
    "prompt": "tifa lockhart \\(sporty dress\\), final fantasy, 1girl, red eyes, black hair, official alternate hairstyle, long hair, tassel hair ornament, double bun, swept bangs, cutout, thighs, china dress, black dress, grey dress, pelvic curtain, bracelet, corsage"
  },
  {
    "group": "兽娘动物园",
    "name": "土狼",
    "prompt": "aardwolf \\(kemono friends\\), kemono friends, 1girl, animal ears, tail, extra ears, hair between eyes, black eyes, black hair, two-tone hair, long hair, white hair, grey hair, ponytail, high ponytail, elbow gloves, sleeveless shirt, print gloves, print shirt, short shorts, collared shirt, pantyhose, bare shoulders, black necktie"
  },
  {
    "group": "兽娘动物园",
    "name": "非洲企鹅",
    "prompt": "african penguin \\(kemono friends\\), kemono friends, 1girl, tail, black eyes, black hair, long hair, multicolored hair, white hair, pink hair, skirt, headphones, virtual youtuber, penguin girl, microphone"
  },
  {
    "group": "兽娘动物园",
    "name": "非洲岩蟒",
    "prompt": "african rock python \\(kemono friends\\), kemono friends, 1girl, snake tail, fangs, purple eyes, slit pupils, blonde hair, long hair, purple hair, two-tone hair, pink hair, gradient hair, hooded jacket, print jacket, black gloves, hood up, long sleeves, snake girl, drawstring, snake print"
  },
  {
    "group": "兽娘动物园",
    "name": "非洲野犬",
    "prompt": "african wild dog \\(kemono friends\\), kemono friends, 1girl, dog girl, dog ears, dog tail, extra ears, brown eyes, hair between eyes, short hair, black hair, two-tone hair, brown hair, multicolored hair, grey hair, sidelocks, white shirt, short over long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "苏里羊驼",
    "prompt": "alpaca suri \\(kemono friends\\), kemono friends, 1girl, alpaca ears, alpaca tail, extra ears, blue eyes, hair over one eye, horizontal pupils, blonde hair, single hair bun, short hair, medium hair, white hair, sidelocks, long sleeves, fur collar, neck ribbon, fur-trimmed sleeves, alpaca girl"
  },
  {
    "group": "兽娘动物园",
    "name": "美洲海狸",
    "prompt": "american beaver \\(kemono friends\\), kemono friends, 1girl, beaver ears, beaver tail, extra ears, brown eyes, grey hair, antenna hair, short hair, multicolored hair, hairclip, medium breasts, navel, elbow gloves, black gloves, fur collar"
  },
  {
    "group": "兽娘动物园",
    "name": "北极狐",
    "prompt": "arctic fox \\(kemono friends\\), kemono friends, 1girl, fox girl, fox ears, fox tail, extra ears, yellow eyes, hair between eyes, orange eyes, white hair, long hair, very long hair, sidelocks, white capelet, white gloves, long sleeves, blue bowtie"
  },
  {
    "group": "兽娘动物园",
    "name": "北极兔",
    "prompt": "arctic hare \\(kemono friends\\), kemono friends, 1girl, rabbit ears, rabbit tail, red eyes, white hair, long hair, short hair, rabbit girl"
  },
  {
    "group": "兽娘动物园",
    "name": "大西洋海鹦",
    "prompt": "atlantic puffin \\(kemono friends\\), kemono friends, 1girl, bird girl, bird tail, red eyes, hair between eyes, multicolored hair, black hair, white hair, short hair, red hair, blonde hair, long sleeves, head wings, bird wings"
  },
  {
    "group": "兽娘动物园",
    "name": "袋獾（塔斯马尼亚恶魔）",
    "prompt": "australian devil \\(kemono friends\\), kemono friends, 1girl, extra ears, animal ears, tasmanian devil tail, tail, fang, tasmanian devil ears, brown eyes, empty eyes, one eye covered, medical eyepatch, black hair, long hair, brown hair, bare shoulders"
  },
  {
    "group": "兽娘动物园",
    "name": "指猴",
    "prompt": "aye-aye \\(kemono friends\\), kemono friends, 1girl, animal ears, tail, monkey tail, monkey ears, red eyes, orange eyes, hair between eyes, black hair, blonde hair, pink hair, multicolored hair, long hair, short hair, twintails, china dress, elbow gloves, black gloves, black dress, black thighhighs, sleeveless dress, bare shoulders, zettai ryouiki, monkey girl, shuriken, lemur ears, lemur tail"
  },
  {
    "group": "兽娘动物园",
    "name": "白头海雕",
    "prompt": "bald eagle \\(kemono friends\\), kemono friends, 1girl, bird girl, bird tail, yellow eyes, hair between eyes, blonde hair, long hair, white hair, multicolored hair, black hair, gradient hair, pleated skirt, white gloves, long sleeves, head wings, bird wings"
  },
  {
    "group": "兽娘动物园",
    "name": "蝙蝠耳狐",
    "prompt": "bat-eared fox \\(kemono friends\\), kemono friends, 1girl, fox girl, fox ears, fox tail, extra ears, animal ear fluff, brown eyes, grey hair, short hair, black hair, multicolored hair, two-tone hair, white hair, elbow gloves, black gloves, pleated skirt, bowtie, short sleeves, fur trim"
  },
  {
    "group": "兽娘动物园",
    "name": "伯格曼熊",
    "prompt": "bergman's bear \\(kemono friends\\), kemono friends, 1girl, bear girl, bear ears, extra ears, empty eyes, brown eyes, grey hair, black hair, long hair, multicolored hair, brown hair, very long hair, sidelocks, ponytail, hair bow, bare shoulders, center frills, bowtie, huge bow"
  },
  {
    "group": "兽娘动物园",
    "name": "黑龙（幻想生物）",
    "prompt": "black dragon \\(kemono friends\\), kemono friends, 1girl, dragon horns, dragon tail, dragon ears, multicolored horns, extra ears, animal ears, grey eyes, hair between eyes, black hair, long hair, blue hair, multicolored hair, sidelocks, fingerless gloves, white coat, lab coat, open coat, black gloves, elbow gloves, black skirt, blue shirt, shirt, pleated skirt, black thighhighs, dragon girl, scales, doctor, stethoscope"
  },
  {
    "group": "兽娘动物园",
    "name": "黑美洲豹",
    "prompt": "black jaguar \\(kemono friends\\), kemono friends, 1girl, jaguar ears, jaguar tail, extra ears, blue eyes, hair between eyes, black hair, short hair, elbow gloves, print gloves, print skirt, purple shirt, black skirt, black gloves, short sleeves, black bowtie, center frills, fur collar, jaguar"
  },
  {
    "group": "兽娘动物园",
    "name": "黑头鹮",
    "prompt": "black-headed ibis \\(kemono friends\\), kemono friends, 1girl, bird girl, bird tail, brown eyes, black hair, long hair, twin braids, sidelocks, blunt bangs, black gloves, black pantyhose, pleated skirt, white shirt, long sleeves, fur collar, frilled sleeves, head wings, bird wings, white fur"
  },
  {
    "group": "兽娘动物园",
    "name": "黑尾鸥",
    "prompt": "black-tailed gull \\(kemono friends\\), kemono friends, 1girl, bird girl, bird tail, hair between eyes, yellow eyes, white hair, long hair, multicolored hair, black hair, blonde hair, grey hair, red hair, sailor dress, pantyhose, short sleeves, sailor collar, head wings, bird wings"
  },
  {
    "group": "兽娘动物园",
    "name": "黑尾草原犬鼠",
    "prompt": "black-tailed prairie dog \\(kemono friends\\), kemono friends, 1girl, animal ears, tail, extra ears, brown eyes, short hair, light brown hair, white hair, brown hair, gradient hair, plaid skirt, pleated skirt, fur collar, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "印度黑羚",
    "prompt": "blackbuck \\(kemono friends\\), kemono friends, 1girl, antelope ears, antelope horns, extra ears, animal ears, horns, tail, red eyes, hair over one eye, black hair, white hair, two-tone hair, short hair, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "青龙（幻想生物）",
    "prompt": "blue dragon \\(kemono friends\\), kemono friends, 1girl, dragon horns, dragon tail, extra ears, dragon ears, animal ears, yellow horns, blue eyes, hair between eyes, long hair, blue hair, sidelocks, fingerless gloves, collared shirt, sleeveless shirt, skirt, white shirt, blue gloves, thighhighs, bare shoulders, necktie, sleeveless, dragon girl"
  },
  {
    "group": "兽娘动物园",
    "name": "蓝鲸",
    "prompt": "blue whale \\(kemono friends\\), kemono friends, 1girl, cetacean tail, blue eyes, hair between eyes, glasses, blue hair, grey hair, long hair, multicolored hair, anchor hair ornament, turtleneck sweater, ribbed sweater, white sweater, long sleeves, blowhole, dorsal fin, head fins, whale girl, japari symbol"
  },
  {
    "group": "兽娘动物园",
    "name": "棕熊",
    "prompt": "brown bear \\(kemono friends\\), kemono friends, 1girl, bear girl, bear ears, bear tail, extra ears, short tail, brown eyes, hair between eyes, short hair, black hair, two-tone hair, white hair, brown hair, medium hair, grey hair, sidelocks, elbow gloves, white shirt, bike shorts, fingerless gloves, collared shirt, short sleeves, paw stick, microskirt"
  },
  {
    "group": "兽娘动物园",
    "name": "褐长耳蝠",
    "prompt": "brown long-eared bat \\(kemono friends\\), kemono friends, 1girl, bat ears, extra ears, brown eyes, brown hair, long hair, grey hair, multicolored hair, leotard, elbow gloves, skirt, fingerless gloves, pantyhose, virtual youtuber, bat wings, bat girl, microphone"
  },
  {
    "group": "兽娘动物园",
    "name": "棕色纯血马",
    "prompt": "brown thoroughbred \\(kemono friends\\), kemono friends, 1girl, horse girl, dark-skinned female, horse ears, horse tail, extra ears, brown eyes, long hair, black hair, brown hair, medium breasts, navel, elbow gloves, fingerless gloves, black gloves, black sports bra, bare shoulders, sportswear, bridle, midriff"
  },
  {
    "group": "兽娘动物园",
    "name": "白虎（神兽）",
    "prompt": "byakko \\(kemono friends\\), kemono friends, 1girl, tiger girl, cat girl, heterochromia, tiger ears, tiger tail, extra ears, animal ear fluff, blue eyes, yellow eyes, hair between eyes, white hair, short hair, two-tone hair, grey hair, medium hair, pleated skirt, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "（原创角色，羽饰少女，不是现实动物）",
    "prompt": "calenda \\(kemono friends\\), kemono friends, 1girl, blue eyes, blonde hair, long hair, twintails, sidelocks, body freckles, collarbone, hat feather, bare shoulders"
  },
  {
    "group": "兽娘动物园",
    "name": "水豚",
    "prompt": "capybara \\(kemono friends\\), kemono friends, 1girl, animal ears, extra ears, brown eyes, hair between eyes, brown hair, short hair, light brown hair, two-tone hair, multicolored hair, capybara girl, towel on head, japari symbol"
  },
  {
    "group": "兽娘动物园",
    "name": "狞猫",
    "prompt": "caracal \\(kemono friends\\), kemono friends, 1girl, cat girl, animal ears, extra ears, tail, animal ear fluff, orange tail, cat ears, blue eyes, orange hair, long hair, multicolored hair, short hair, elbow gloves, sleeveless shirt, white shirt, skirt, bare shoulders, bowtie, virtual youtuber"
  },
  {
    "group": "兽娘动物园",
    "name": "猫",
    "prompt": "cat \\(kemono friends\\), kemono friends, 1girl, cat girl, cat ears, cat tail, extra ears, animal ear fluff, striped tail, yellow eyes, hair between eyes, short hair, white hair, blonde hair, light brown hair, multicolored hair, elbow gloves, high-waist skirt, thighhighs, white shirt, bare shoulders"
  },
  {
    "group": "兽娘动物园",
    "name": "刻耳柏洛斯（三头犬神话生物）",
    "prompt": "cerberus \\(kemono friends\\), kemono friends, 1girl, dog ears, animal ear fluff, lizard tail, extra ears, tail, fangs, hair between eyes, blue eyes, aqua eyes, scar across eye, glowing hair, black hair, big hair, purple hair, two-tone hair, multicolored hair, two side up, twintails, navel, thigh strap, scar on face, collarbone, elbow gloves, fingerless gloves, pantyhose under shorts, short shorts, black gloves, black shorts, spiked collar, bare shoulders, bow, bone necklace, stomach, tube top, cutoffs, midriff"
  },
  {
    "group": "兽娘动物园",
    "name": "查普曼斑马",
    "prompt": "chapman's zebra \\(kemono friends\\), kemono friends, 1girl, zebra ears, zebra tail, extra ears, tail, brown eyes, hair between eyes, striped hair, black hair, white hair, two-tone hair, long hair, very long hair, sidelocks, collared shirt, long sleeves, zebra girl"
  },
  {
    "group": "兽娘动物园",
    "name": "猎豹",
    "prompt": "cheetah \\(kemono friends\\), kemono friends, 1girl, cheetah ears, animal ears, cheetah tail, extra ears, tail, animal ear fluff, yellow eyes, hair between eyes, blonde hair, brown hair, long hair, very long hair, gradient hair, multicolored hair, two-tone hair, thighhighs, elbow gloves, print gloves, white shirt, print skirt, pleated skirt, print necktie, short sleeves, cheetah girl"
  },
  {
    "group": "兽娘动物园",
    "name": "栗色纯血马",
    "prompt": "chestnut thoroughbred \\(kemono friends\\), kemono friends, 1girl, horse girl, horse ears, horse tail, extra ears, brown eyes, hair between eyes, brown hair, white hair, long hair, two-tone hair, blonde hair, multicolored hair, ponytail, medium breasts, navel, sports bra, brown sports bra, bare shoulders, detached sleeves, sportswear, buruma, bridle, midriff, headgear, brown buruma"
  },
  {
    "group": "兽娘动物园",
    "name": "中华白海豚",
    "prompt": "chinese white dolphin \\(kemono friends\\), kemono friends, 1girl, cetacean tail, hair between eyes, blue eyes, pink hair, orange hair, white hair, short hair, multicolored hair, blonde hair, gradient hair, short twintails, sailor dress, white dress, red necktie, puffy short sleeves, dolphin girl, blowhole, dorsal fin, fins, head fins"
  },
  {
    "group": "兽娘动物园",
    "name": "腔棘鱼",
    "prompt": "coelacanth \\(kemono friends\\), kemono friends, 1girl, fish girl, fish tail, blue eyes, long hair, dark blue hair, multicolored hair, very long hair, blue hair, twin braids, blunt bangs, side braid, navel, blue skirt, bare shoulders, head fins, midriff"
  },
  {
    "group": "兽娘动物园",
    "name": "普通宽吻海豚",
    "prompt": "common bottlenose dolphin \\(kemono friends\\), kemono friends, 1girl, cetacean tail, blue eyes, hair between eyes, blue hair, grey hair, short hair, white hair, multicolored hair, short sleeves, sailor collar, dolphin girl, dorsal fin, head fins, blowhole"
  },
  {
    "group": "兽娘动物园",
    "name": "普通海豚",
    "prompt": "common dolphin \\(kemono friends\\), kemono friends, 1girl, cetacean tail, blue eyes, blue hair, black hair, multicolored hair, blonde hair, short hair, white hair, sailor collar, bare shoulders, dorsal fin, blowhole, dolphin girl, fins, head fins"
  },
  {
    "group": "兽娘动物园",
    "name": "浣熊",
    "prompt": "common raccoon \\(kemono friends\\), kemono friends, 1girl, raccoon girl, raccoon ears, raccoon tail, fang, extra ears, brown eyes, grey hair, multicolored hair, short hair, black hair, white hair, fur collar"
  },
  {
    "group": "兽娘动物园",
    "name": "吸血蝙蝠",
    "prompt": "common vampire bat \\(kemono friends\\), kemono friends, 1girl, bat ears, fangs, extra ears, purple eyes, short hair, black hair, pink hair, purple hair, white hair, gradient hair, multicolored hair, pleated skirt, long sleeves, sailor collar, bat wings, head wings, bat girl"
  },
  {
    "group": "兽娘动物园",
    "name": "（虚拟形象，源自郊狼 Coyote 的 VTuber 变体）",
    "prompt": "coyopotato, kemono friends, 1girl, wolf girl, wolf ears, wolf tail, extra ears, animal ear fluff, yellow eyes, short hair, blonde hair, multicolored hair, white hair, white shirt, black jacket, skirt, yellow gloves, virtual youtuber, animal costume, microphone"
  },
  {
    "group": "兽娘动物园",
    "name": "郊狼",
    "prompt": "coyote \\(kemono friends\\), kemono friends, 1girl, wolf girl, wolf ears, wolf tail, extra ears, animal ear fluff, yellow eyes, short hair, blonde hair, multicolored hair, white hair, white shirt, black jacket, skirt, virtual youtuber, microphone"
  },
  {
    "group": "兽娘动物园",
    "name": "豺",
    "prompt": "dhole \\(kemono friends\\), kemono friends, 1girl, dog girl, dog ears, dog tail, extra ears, animal ear fluff, brown eyes, short hair, brown hair, white hair, two-tone hair, light brown hair, white gloves, bare shoulders"
  },
  {
    "group": "兽娘动物园",
    "name": "恐狼（已灭绝的史前动物）",
    "prompt": "dire wolf \\(kemono friends\\), kemono friends, 1girl, wolf girl, wolf ears, wolf tail, animal ear fluff, extra ears, grey eyes, yellow eyes, long hair, blue hair, twintails, gloves, skirt, ribbon, virtual youtuber"
  },
  {
    "group": "兽娘动物园",
    "name": "渡渡鸟（已灭绝鸟类）",
    "prompt": "dodo \\(kemono friends\\), kemono friends, 1girl, bird tail, hair between eyes, yellow eyes, empty eyes, short hair, black hair, pink hair, multicolored hair, brown hair, two-tone hair, hairband, pleated skirt, brown sweater, fur collar, fur trim, poncho"
  },
  {
    "group": "兽娘动物园",
    "name": "混种狗",
    "prompt": "dog \\(mixed breed) (kemono friends\\), kemono friends, 1girl, dog girl, heterochromia, dog ears, dog tail, animal ear fluff, fang, blue eyes, yellow eyes, grey hair, white hair, short hair, two-tone hair, white gloves, elbow gloves"
  },
  {
    "group": "兽娘动物园",
    "name": "柴犬",
    "prompt": "dog \\(shiba inu) (kemono friends\\), kemono friends, 1girl, dog girl, dog ears, dog tail, extra ears, brown eyes, short hair, white hair, two-tone hair, light brown hair, brown hair, elbow gloves, white shirt, collared shirt, short sleeves, harness"
  },
  {
    "group": "兽娘动物园",
    "name": "驴",
    "prompt": "donkey \\(kemono friends\\), kemono friends, 1girl, donkey ears, animal ears, extra ears, tail, animal ear fluff, grey hair, long hair, black hair, multicolored hair, white hair, ponytail, long sleeves, black bowtie, donkey girl, forehead, donkey tail"
  },
  {
    "group": "兽娘动物园",
    "name": "帝企鹅",
    "prompt": "emperor penguin \\(kemono friends\\), kemono friends, 1girl, brown eyes, hair over one eye, black hair, long hair, streaked hair, orange hair, covered navel, highleg leotard, headphones, white leotard, white thighhighs, black jacket"
  },
  {
    "group": "兽娘动物园",
    "name": "雕鸮",
    "prompt": "eurasian eagle owl \\(kemono friends\\), kemono friends, 1girl, bird girl, bird tail, owl ears, brown eyes, hair between eyes, brown hair, short hair, multicolored hair, white hair, black hair, long sleeves, fur collar, head wings, bird wings"
  },
  {
    "group": "兽娘动物园",
    "name": "蝦夷赤狐",
    "prompt": "ezo red fox \\(kemono friends\\), kemono friends, 1girl, fox girl, fox ears, fox tail, extra ears, hair between eyes, orange eyes, yellow eyes, blonde hair, long hair, very long hair, brown hair, orange hair, multicolored hair, pleated skirt, black gloves, white skirt, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "耳廓狐",
    "prompt": "fennec \\(kemono friends\\), kemono friends, 1girl, fox girl, fox ears, fox tail, extra ears, animal ear fluff, brown eyes, blonde hair, short hair, white hair, multicolored hair"
  },
  {
    "group": "兽娘动物园",
    "name": "巴布亚企鹅",
    "prompt": "gentoo penguin \\(kemono friends\\), kemono friends, 1girl, hair between eyes, brown eyes, orange eyes, black hair, long hair, multicolored hair, orange hair, medium breasts, headphones, white skirt, pleated skirt, jacket, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "大熊猫",
    "prompt": "giant panda \\(kemono friends\\), kemono friends, 1girl, panda ears, extra ears, panda tail, black eyes, white hair, short hair, two-tone hair, black hair, serafuku, elbow gloves, black gloves, black skirt, white shirt, pleated skirt, sailor collar, short sleeves, panda girl"
  },
  {
    "group": "兽娘动物园",
    "name": "金丝猴",
    "prompt": "golden snub-nosed monkey \\(kemono friends\\), kemono friends, 1girl, monkey ears, monkey tail, brown eyes, long hair, orange hair, blonde hair, multicolored hair, brown hair, ponytail, high ponytail, medium breasts, yellow leotard, highleg leotard, elbow gloves, bare shoulders, bracelet, circlet, bo staff"
  },
  {
    "group": "兽娘动物园",
    "name": "荷斯坦牛（乳牛）",
    "prompt": "holstein friesian cattle \\(kemono friends\\), kemono friends, 1girl, cow girl, cow ears, extra ears, cow tail, tail bell, tail bow, black eyes, two-tone hair, black hair, white hair, short hair, single hair bun, hair bow, elbow gloves, print gloves, print shirt, thighhighs, black skirt, frilled skirt, sleeveless shirt, pleated skirt, bare shoulders, orange bow, black bowtie"
  },
  {
    "group": "兽娘动物园",
    "name": "美洲豹",
    "prompt": "jaguar \\(kemono friends\\), kemono friends, 1girl, jaguar ears, jaguar tail, yellow eyes, short hair, blonde hair, multicolored hair, elbow gloves, white shirt, thighhighs, print gloves, short sleeves, fur collar"
  },
  {
    "group": "兽娘动物园",
    "name": "朱鹮",
    "prompt": "japanese crested ibis \\(kemono friends\\), kemono friends, 1girl, bird tail, yellow eyes, white hair, red hair, two-tone hair, long hair, gradient hair, blunt bangs, sidelocks, pleated skirt, white shirt, red gloves, red skirt, long sleeves, fur collar, frilled sleeves, head wings, bird wings"
  },
  {
    "group": "兽娘动物园",
    "name": "人面鱼（妖怪/传说生物）",
    "prompt": "jinmen-gyo \\(kemono friends\\), kemono friends, 1girl, fish girl, fish tail, grey eyes, grey hair, long hair, short hair, ponytail, hair bow, multicolored kimono, white kimono, short kimono, grey kimono, mask on head, long sleeves, black bow, head fins, yukata, fins, sandals"
  },
  {
    "group": "兽娘动物园",
    "name": "墨西哥钝口螈（美西螈）",
    "prompt": "mexico salamander \\(kemono friends\\), kemono friends, 1girl, lizard tail, black eyes, long hair, white hair, pink hair, navel, collarbone, bare shoulders, axolotl girl"
  },
  {
    "group": "兽娘动物园",
    "name": "稻荷神（狐狸神话形象）",
    "prompt": "oinari-sama \\(kemono friends\\), kemono friends, 1girl, fox girl, fox ears, fox tail, extra ears, yellow eyes, white hair, very long hair, long hair, thigh strap, white gloves, white skirt, white jacket, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "北白脸鸮",
    "prompt": "northern white-faced owl \\(kemono friends\\), kemono friends, 1girl, bird tail, hair between eyes, brown eyes, orange eyes, short hair, multicolored hair, white hair, grey hair, black hair, blonde hair, long sleeves, fur collar, head wings"
  },
  {
    "group": "兽娘动物园",
    "name": "赤狐",
    "prompt": "red fox \\(kemono friends\\), kemono friends, 1girl, fox girl, fox ears, fox tail, extra ears, animal ear fluff, orange eyes, hair between eyes, orange hair, long hair, black hair, brown hair, multicolored hair, gradient hair, elbow gloves, pleated skirt, white shirt, black gloves, short sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "小熊猫",
    "prompt": "red panda \\(kemono friends\\), kemono friends, 1girl, red panda ears, red panda tail, animal ears, extra ears, panda ears, panda tail, striped tail, tail, brown eyes, white hair, multicolored hair, orange hair, short hair, black hair, brown hair, long hair, black gloves, black pantyhose, fur collar, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "咸水鳄",
    "prompt": "saltwater crocodile \\(kemono friends\\), kemono friends, 1girl, crocodilian tail, green eyes, slit pupils, green hair, asymmetrical hair, long hair, multicolored hair, two-tone hair, high ponytail, ponytail, french braid, medium breasts, collarbone, fingerless gloves, green jacket, black gloves, collared jacket, long sleeves, high collar, spikes, partially unzipped, zipper, zipper pull tab, stomach"
  },
  {
    "group": "兽娘动物园",
    "name": "皇家企鹅",
    "prompt": "royal penguin \\(kemono friends\\), kemono friends, 1girl, red eyes, hair between eyes, black hair, white hair, multicolored hair, pink hair, long hair, blonde hair, twintails, low twintails, medium breasts, headphones, white thighhighs, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "朱鹮（红鹮）",
    "prompt": "scarlet ibis \\(kemono friends\\), kemono friends, 1girl, bird girl, bird tail, red eyes, red hair, black hair, long hair, short hair, gradient hair, multicolored hair, sidelocks, twintails, blunt bangs, short twintails, hair bobbles, pleated skirt, long sleeves, fur collar, head wings, bird wings"
  },
  {
    "group": "兽娘动物园",
    "name": "狞猫（薮猫，《けもフレ》主角）",
    "prompt": "serval \\(kemono friends\\), kemono friends, 1girl, animal ears, extra ears, tail, yellow eyes, hair between eyes, short hair, blonde hair, elbow gloves, sleeveless shirt, white shirt, thighhighs, high-waist skirt, print bowtie, bare shoulder"
  },
  {
    "group": "兽娘动物园",
    "name": "绵羊",
    "prompt": "sheep \\(kemono friends\\), kemono friends, 1girl, sheep girl, sheep ears, sheep horns, sheep tail, yellow eyes, horizontal pupils, short hair, blonde hair, white hair, medium hair, brown hair"
  },
  {
    "group": "兽娘动物园",
    "name": "绢毛食蚁兽",
    "prompt": "silky anteater \\(kemono friends\\), kemono friends, 1girl, tail, anteater tail, anteater ears, animal ears, brown eyes, blonde hair, short hair, pink hair, hair bow, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "银狐",
    "prompt": "silver fox \\(kemono friends\\), kemono friends, 1girl, fox girl, fox ears, fox tail, extra ears, hair between eyes, orange eyes, brown eyes, grey hair, long hair, black hair, multicolored hair, very long hair, black gloves, pleated skirt, black pantyhose, blue jacket, long sleeves, black bowtie"
  },
  {
    "group": "兽娘动物园",
    "name": "天蛾人/空中鱼（都市传说生物）",
    "prompt": "skyfish \\(kemono friends\\), kemono friends, 1girl, grey eyes, brown eyes, white hair, long hair, blue hair, multicolored hair, twintails, hair ornament, sleeveless dress, white dress, bare shoulders"
  },
  {
    "group": "兽娘动物园",
    "name": "小爪水獭",
    "prompt": "small-clawed otter \\(kemono friends\\), kemono friends, 1girl, otter ears, otter tail, grey tail, brown eyes, short hair, grey hair, white hair, two-tone hair, gradient hair, elbow gloves, fingerless gloves, grey gloves, one-piece swimsuit, fur collar, bare shoulders, frills"
  },
  {
    "group": "兽娘动物园",
    "name": "剑齿虎（已灭绝）",
    "prompt": "smilodon \\(kemono friends\\), kemono friends, 1girl, tiger girl, tiger ears, tiger tail, extra ears, animal ear fluff, blue eyes, hair between eyes, blonde hair, white hair, multicolored hair, short hair, sidelocks, hair bow, medium breasts, elbow gloves, white shirt, thighhighs, saber (weapon)"
  },
  {
    "group": "兽娘动物园",
    "name": "雪鞋兔",
    "prompt": "snowshoe hare \\(kemono friends\\), kemono friends, 1girl, rabbit ears, extra ears, rabbit tail, yellow eyes, hair between eyes, brown eyes, long hair, white hair, grey hair, multicolored hair, sidelocks, hair bow, white shirt, white gloves, bowtie, center frills, rabbit girl"
  },
  {
    "group": "兽娘动物园",
    "name": "南方食蚁兽",
    "prompt": "southern tamandua \\(kemono friends\\), kemono friends, 1girl, tamandua ears, extra ears, tail, tamandua tail, anteater ears, anteater tail, hair between eyes, brown eyes, white hair, short hair, black hair, two-tone hair, multicolored hair, sidelocks, long sleeves"
  },
  {
    "group": "兽娘动物园",
    "name": "月读绅士（兔神拟人，带神话色彩）",
    "prompt": "tsukuyomi shinshi \\(kemono friends\\), kemono friends, 1girl, heterochromia, rabbit ears, rabbit tail, extra ears, blue eyes, yellow eyes, hair between eyes, white hair, short hair, long hair, hair bow, pleated skirt, white shirt, white gloves, white thighhighs, bare shoulders, detached sleeves, frilled sleeves, rabbit girl, kine"
  },
  {
    "group": "兽娘动物园",
    "name": "白化狞猫",
    "prompt": "white serval \\(kemono friends\\), kemono friends, 1girl, extra ears, animal ears, animal ear fluff, tail, cat ears, brown eyes, hair between eyes, short hair, blonde hair, medium hair, white hair, multicolored hair, elbow gloves, white shirt, print gloves, print skirt, sleeveless shirt, print bowtie"
  },
  {
    "group": "miku",
    "name": "兔女郎手办风，兔耳＋紧身连体衣＋毛绒袖口",
    "prompt": "bicute bunnies miku, vocaloid, 1girl, rabbit ears, tied ears, rabbit tail, fake animal ears, ear ribbon, aqua eyes, hair between eyes, blue eyes, aqua hair, blue hair, double bun, sidelocks, medium breasts, strapless leotard, bare shoulders, short necktie, black necktie, detached collar, playboy bunny, wrist cuffs, fur trim"
  },
  {
    "group": "miku",
    "name": "长发化作液体般流动，水生意象，常配鱼元素",
    "prompt": "bottle miku, vocaloid, 1girl, blue eyes, aqua eyes, liquid hair, very long hair, blue hair, aqua hair, twintails, hair ribbon, serafuku, skirt, fish"
  },
  {
    "group": "miku",
    "name": "巴西主题配色，绿黄点缀，节庆或足球氛围",
    "prompt": "brazilian miku, vocaloid"
  },
  {
    "group": "miku",
    "name": "中秋明月主题，汉服羽衣＋团扇与流苏",
    "prompt": "chuushuu meigetsu miku, vocaloid, 1girl, green eyes, aqua eyes, very long hair, aqua hair, green hair, twintails, hair flower, wide sleeves, long sleeves, tassel, hanfu, hagoromo, tuanshan"
  },
  {
    "group": "miku",
    "name": "与肉桂狗联动，软萌蓝白蝴蝶结风",
    "prompt": "cinnamiku, vocaloid, 1girl, tied ears, ear bow, aqua eyes, hair between eyes, blue eyes, aqua hair, blue hair, long hair, hair bow, number tattoo, sleeveless shirt, collared shirt, grey shirt, detached sleeves, blue bow, bare shoulders, aqua necktie, black sleeves, long sleeves, aqua nails, updo"
  },
  {
    "group": "miku",
    "name": "黑系礼装，暗属性氛围，奢华球道具",
    "prompt": "dark miku \\(project voltage\\), vocaloid, 1girl, red eyes, hair between eyes, one eye covered, very long hair, long hair, twintails, black gloves, hat bow, white headwear, black choker, long sleeves, black bow, bare shoulders, earrings, luxury ball, poke ball, microphone"
  },
  {
    "group": "miku",
    "name": "慵懒和平风格，长裙＋礼帽＋手套",
    "prompt": "ennui heiwa miku, vocaloid, 1girl, aqua eyes, blue eyes, very long hair, aqua hair, green hair, twintails, hair ribbon, dress, pantyhose, gloves, hat, knee boots, belt"
  },
  {
    "group": "miku",
    "name": "冬夜意象，条纹裙袜＋星星配件",
    "prompt": "fuyu no yoru miku, vocaloid, 1girl, blue eyes, blue hair, very long hair, twintails, striped clothes, striped thighhighs, dress, fingerless gloves, choker, star (symbol)"
  },
  {
    "group": "miku",
    "name": "Q版搞怪表情，呜喵脸梗",
    "prompt": "hachune miku, vocaloid, 1girl, aqua eyes, aqua hair, very long hair, long hair, twintails"
  },
  {
    "group": "miku",
    "name": "金属系暗黑衍生，黑银配色朋克感",
    "prompt": "hagane miku, vocaloid, 1girl, blue eyes, very long hair, long hair, twintails, thighhighs, detached sleeves"
  },
  {
    "group": "miku",
    "name": "本体，青绿双马尾＋制服风分离袖",
    "prompt": "hatsune miku, vocaloid, 1girl, aqua eyes, blue eyes, very long hair, aqua hair, long hair, twintails, detached sleeves"
  },
  {
    "group": "miku",
    "name": "Append”音源形象，轻薄白黑服饰",
    "prompt": "hatsune miku \\(append\\), vocaloid, 1girl, aqua eyes, very long hair, aqua hair, twintails, navel, thighhighs, elbow gloves, necktie, vocaloid append, bridal gauntlets"
  },
  {
    "group": "miku",
    "name": "校园风混搭，高马尾＋格纹短裙＋耳机",
    "prompt": "hatsune miku \\(if\\), vocaloid, 1girl, aqua eyes, hair between eyes, blue eyes, aqua hair, long hair, very long hair, blue hair, ponytail, high ponytail, sidelocks, hair ribbon, thigh boots, pleated skirt, aqua skirt, headphones, plaid skirt, black shirt, black thighhighs, black jacket, zettai ryouiki, long sleeves, aqua nails, nail polish, miniskirt"
  },
  {
    "group": "miku",
    "name": "杯面压盖造型，侧马尾休闲姿势",
    "prompt": "hatsune miku \\(noodle stopper\\), vocaloid, 1girl, hand up, hair between eyes, blue eyes, aqua eyes, long hair, aqua hair, very long hair, blue hair, side ponytail, sleeveless shirt, collared shirt, grey shirt, detached sleeves, bare shoulders, black sleeves, nail polish, aqua nails, blue nails"
  },
  {
    "group": "miku",
    "name": "NT版本，白衬衣＋黑裙＋透明袖＋肩纹身",
    "prompt": "hatsune miku \\(nt\\), vocaloid, 1girl, aqua eyes, hair between eyes, blue eyes, aqua hair, very long hair, blue hair, twintails, hair ornament, shoulder tattoo, sleeveless shirt, white shirt, black skirt, pleated skirt, headphones, collared shirt, black thighhighs, detached sleeves, neck ribbon, bare shoulders, see-through sleeves, aqua ribbon, layered sleeves, nail polish, aqua nails, miniskirt"
  },
  {
    "group": "miku",
    "name": "V3造型，经典配色＋耳机与领带",
    "prompt": "hatsune miku \\(vocaloid3\\), vocaloid, 1girl, aqua eyes, very long hair, aqua hair, twintails, pleated skirt, sleeveless shirt, white shirt, headphones, black skirt, skirt, detached sleeves, necktie, headset"
  },
  {
    "group": "miku",
    "name": "V4造型，黑白制服感＋Zettai Ryouiki。",
    "prompt": "hatsune miku \\(vocaloid4\\), vocaloid, 1girl, aqua eyes, hair between eyes, blue eyes, aqua hair, very long hair, blue hair, twintails, hair ornament, shoulder tattoo, sleeveless shirt, black skirt, white shirt, pleated skirt, black thighhighs, headphones, collared shirt, detached sleeves, bare shoulders, aqua necktie, black sleeves, zettai ryouiki, nail polish, aqua nails, headset, miniskirt"
  },
  {
    "group": "miku",
    "name": "男体化版本，青绿短发少年",
    "prompt": "hatsune mikuo, vocaloid, 1boy, aqua eyes, blue eyes, aqua hair, short hair, blue hair, headphones, collared shirt, detached sleeves, necktie"
  },
  {
    "group": "miku",
    "name": "Magical Mirai总称，年度演唱会造型",
    "prompt": "magical mirai miku, vocaloid, 1girl, aqua eyes, blue eyes, hair between eyes, very long hair, aqua hair, blue hair, twintails, detached sleeves"
  },
  {
    "group": "miku",
    "name": "黑白大蝴蝶结＋白手套",
    "prompt": "magical mirai miku \\(2016\\), vocaloid, 1girl, aqua eyes, blue eyes, very long hair, aqua hair, blue hair, twintails, hair bow, white gloves, headphones, black bow"
  },
  {
    "group": "miku",
    "name": "黄蝴蝶结＋扩音器或气球",
    "prompt": "magical mirai miku \\(2018\\), vocaloid, 1girl, hair between eyes, aqua eyes, blue eyes, very long hair, aqua hair, blue hair, twintails, ahoge, hair ornament, headphones, sleeveless shirt, white shirt, detached sleeves, bare shoulders, yellow bow, megaphone, balloon"
  },
  {
    "group": "miku",
    "name": "夏祭浴衣＋折扇",
    "prompt": "magical mirai miku \\(2020 summer\\), vocaloid, 1girl, aqua eyes, blue eyes, very long hair, aqua hair, blue hair, twintails, hairclip, black skirt, frilled skirt, black thighhighs, wide sleeves, yukata, folding fan"
  },
  {
    "group": "miku",
    "name": "毛绒边冬季礼服＋耳机",
    "prompt": "magical mirai miku \\(2020 winter\\), vocaloid, 1girl, aqua eyes, very long hair, aqua hair, twintails, hairclip, fur-trimmed dress, white dress, headphones, blue gloves, bare shoulders, detached sleeves, fur-trimmed sleeves, wide sleeves, headset"
  },
  {
    "group": "miku",
    "name": "渐变发色＋花饰宽袖",
    "prompt": "magical mirai miku \\(2021\\), vocaloid, 1girl, aqua eyes, hair between eyes, blue eyes, very long hair, aqua hair, blue hair, gradient hair, twintails, hair flower, detached sleeves, wide sleeves"
  },
  {
    "group": "miku",
    "name": "粉色电台主题，天线饰＋粉裙",
    "prompt": "magical mirai miku \\(2022\\), vocaloid, 1girl, blue eyes, aqua eyes, aqua hair, very long hair, blue hair, pink hair, star hair ornament, twintails, hair ribbon, sleeveless dress, headphones, pink dress, pink gloves, bare shoulders, headset, radio antenna"
  },
  {
    "group": "miku",
    "name": "机能街头风，护目镜＋拼色羽绒",
    "prompt": "magical mirai miku \\(2023\\), vocaloid, 1girl, ear piercing, aqua eyes, blue eyes, goggles on head, aqua hair, red hair, very long hair, detached hair, two-tone hair, streaked hair, blue hair, ring hair ornament, blunt bangs, twintails, twin braids, sidelocks, navel cutout, navel, black jacket, red pants, two-sided jacket, open jacket, baggy pants, down jacket, red jacket, black footwear, bare shoulders, off shoulder, nail polish, chain necklace, 39"
  },
  {
    "group": "miku",
    "name": "白制服＋手套与帽饰，超能力系气质",
    "prompt": "psychic miku \\(project voltage\\), vocaloid, 1girl, hair between eyes, aqua eyes, blue eyes, aqua hair, very long hair, green hair, multicolored hair, twintails, hair through headwear, hair ribbon, white shirt, collared shirt, white headwear, headphones, white gloves, pleated skirt, white footwear, polo shirt, grey skirt, plaid skirt, short sleeves, shoulder bag, red ribbon, bracelet, beanie, single glove, sneakers, poke ball (basic)"
  },
  {
    "group": "miku",
    "name": "赛车应援总称，紧身衣＋长手套",
    "prompt": "racing miku, vocaloid, 1girl, aqua eyes, hair between eyes, blue eyes, aqua hair, very long hair, twintails, black gloves, race queen"
  },
  {
    "group": "miku",
    "name": "经典白连体衣＋长筒袜",
    "prompt": "racing miku \\(2011\\), vocaloid, 1girl, aqua eyes, very long hair, aqua hair, twintails, leotard, elbow gloves, thighhighs, race queen"
  },
  {
    "group": "miku",
    "name": "古铜肤＋白比基尼＋透明机械翼",
    "prompt": "racing miku \\(2013\\), vocaloid, 1girl, dark skin, aqua eyes, blue eyes, eyewear on head, aqua hair, very long hair, heart hair bun, twintails, double bun, medium breasts, navel, fingerless gloves, elbow gloves, sunglasses, black gloves, headphones, white bikini, high heels, nail polish, transparent wings, mechanical wings, race queen, tanlines, body writing, headset, stomach"
  },
  {
    "group": "miku",
    "name": "发丝漂浮感，白手套＋耳机",
    "prompt": "racing miku \\(2014\\), vocaloid, 1girl, floating hair, blue eyes, aqua eyes, long hair, aqua hair, blue hair, very long hair, twintails, medium breasts, elbow gloves, headphones, thighhighs, white gloves, race queen"
  },
  {
    "group": "miku",
    "name": "渐变发＋裸肩设计",
    "prompt": "racing miku \\(2015\\), vocaloid, 1girl, aqua eyes, blue eyes, very long hair, aqua hair, blue hair, gradient hair, green hair, twintails, elbow gloves, white gloves, bare shoulders, race queen"
  },
  {
    "group": "miku",
    "name": "黑白拼接紧身衣＋短夹克",
    "prompt": "racing miku \\(2022\\), vocaloid, 1girl, aqua eyes, hair between eyes, blue eyes, aqua hair, very long hair, twintails, covered navel, asymmetrical bodysuit, black bodysuit, cropped jacket, black gloves, white jacket, green gloves, two-tone gloves, long sleeves, race queen"
  },
  {
    "group": "miku",
    "name": "粉发＋樱花发饰，春季限定",
    "prompt": "sakura miku, vocaloid, 1girl, pink eyes, pink hair, very long hair, twintails, detached sleeves, necktie"
  },
  {
    "group": "miku",
    "name": "Rella绘风，粉裙＋小圆礼帽",
    "prompt": "sakura miku \\(rella\\), vocaloid, 1girl, floating hair, pink eyes, hair between eyes, pink hair, very long hair, cherry hair ornament, twintails, white shirt, pink skirt, bowler hat, pleated skirt, jacket on shoulders, plaid jacket, long sleeves, sleeves past wrists"
  },
  {
    "group": "miku",
    "name": "白裙＋草莓红点缀",
    "prompt": "strawberry miku \\(morikura\\), vocaloid, 1girl, hair between eyes, aqua eyes, green eyes, very long hair, aqua hair, green hair, twintails, hair flower, hair ribbon, white thighhighs, white dress, sleeveless dress, red footwear, frilled dress, detached sleeves, red ribbon"
  },
  {
    "group": "miku",
    "name": "猫耳＋虎牙，幻想游乐感",
    "prompt": "wonderlands x showtime miku, vocaloid, 1girl, floating hair, cat ears, fangs, cat tail, fang, blue eyes, hair between eyes, aqua eyes, blue hair, very long hair, long hair, aqua hair, twintails, ahoge"
  },
  {
    "group": "miku",
    "name": "雪初音总称，蓝白雪花元素",
    "prompt": "yuki miku, vocaloid, 1girl, blue eyes, very long hair, blue hair, twintails"
  },
  {
    "group": "miku",
    "name": "初代雪配色，基础款",
    "prompt": "yuki miku \\(2010\\), vocaloid, 1girl, blue eyes, very long hair, blue hair, twintails, skirt, thighhighs, detached sleeves, necktie"
  },
  {
    "group": "miku",
    "name": "围巾＋耳罩，校园保暖感",
    "prompt": "yuki miku \\(2011\\), vocaloid, 1girl, blue eyes, very long hair, blue hair, light blue hair, twintails, hair ornament, white scarf, pleated skirt, white shirt, sleeveless shirt, thighhighs, detached sleeves, blue necktie, mittens, miniskirt, earmuffs"
  },
  {
    "group": "miku",
    "name": "发饰蝴蝶结＋耳罩手套",
    "prompt": "yuki miku \\(2012\\), vocaloid, 1girl, blue eyes, very long hair, blue hair, twintails, hair bow, skirt, thighhighs, mittens, earmuffs"
  },
  {
    "group": "miku",
    "name": "白无垢＋雪兔，和风主题",
    "prompt": "yuki miku \\(2013\\), vocaloid, 1girl, aqua eyes, green eyes, long hair, aqua hair, green hair, twintails, hair ornament, white kimono, hood, oil-paper umbrella, uchikake, snow rabbit, wataboushi"
  },
  {
    "group": "miku",
    "name": "雪女巫风，女巫帽＋雪花饰",
    "prompt": "yuki miku \\(2014\\), vocaloid, 1girl, blue eyes, very long hair, blue hair, twintails, hair ribbon, witch hat, fingerless gloves, snowflake hat ornament"
  },
  {
    "group": "miku",
    "name": "花主题斗篷与连衣裙",
    "prompt": "yuki miku \\(2015\\), vocaloid, 1girl, blue eyes, aqua eyes, very long hair, aqua hair, green hair, twintails, ahoge, hair flower, white capelet, white dress, floral dress"
  },
  {
    "group": "miku",
    "name": "滑雪元素，滑雪镜＋运动裤袜",
    "prompt": "yuki miku \\(2016\\), vocaloid, 1girl, aqua eyes, blue eyes, goggles on head, ski goggles, very long hair, aqua hair, blue hair, twintails, hat, white gloves, black pantyhose"
  },
  {
    "group": "miku",
    "name": "星辰主题，星星发饰＋蓝裙",
    "prompt": "yuki miku \\(2017\\), vocaloid, 1girl, blue eyes, hair between eyes, blue hair, very long hair, star hair ornament, twintails, ahoge, hair ribbon, hair bow, hairclip, blue dress, fingerless gloves, blue gloves, detached sleeves, bare shoulders, blue ribbon, striped ribbon"
  },
  {
    "group": "miku",
    "name": "神乐和服＋乐符纹样",
    "prompt": "yuki miku \\(2018\\), vocaloid, 1girl, blue eyes, very long hair, white hair, blue hair, musical note hair ornament, twintails, white kimono, chihaya (clothing), striped clothes, striped thighhighs, black thighhighs, vertical-striped clothes, black skirt, pleated skirt, wide sleeves, long sleeves, kagura suzu, beamed eighth notes, musical note print"
  },
  {
    "group": "miku",
    "name": "音符礼裙，露肩＋蒂亚拉",
    "prompt": "yuki miku \\(2019\\), vocaloid, 1girl, floating hair, blue eyes, hair between eyes, very long hair, blue hair, musical note hair ornament, twintails, blue dress, frilled dress, strapless dress, bare shoulders, detached sleeves, detached collar, juliet sleeves, white sleeves, striped sleeves, tiara, beamed eighth notes"
  },
  {
    "group": "miku",
    "name": "军乐队制服＋小军帽",
    "prompt": "yuki miku \\(2020\\), vocaloid, 1girl, french horn, blue eyes, hair between eyes, aqua eyes, very long hair, blue hair, aqua hair, twintails, hair ribbon, hairclip, band uniform, blue jacket, hat feather, white gloves, mini shako cap, white skirt, blue headwear, pleated skirt, long sleeves, epaulettes, eighth note, beamed eighth notes"
  },
  {
    "group": "miku",
    "name": "宫廷雪装＋毛绒边与灯饰",
    "prompt": "yuki miku \\(2021\\), vocaloid, 1girl, blue eyes, hair between eyes, very long hair, light blue hair, blue hair, musical note hair ornament, twintails, braided bangs, hair bow, white capelet, white headwear, fur-trimmed capelet, blue gloves, white dress, long sleeves, blue bow, beret, gold trim, blue tabard, treble clef, string of light bulbs"
  },
  {
    "group": "miku",
    "name": "海军风制服＋条纹元素",
    "prompt": "yuki miku \\(2022\\), vocaloid, 1girl, blue eyes, very long hair, blue hair, wavy hair, white hair, twintails, hair ribbon, naval uniform, fur-trimmed coat, peaked cap, black gloves, striped clothes, red shirt, black coat, white headwear, white jacket, black shorts, striped thighhighs, red ribbon, black necktie, colored tips, crab, double-breasted, white hat"
  },
  {
    "group": "miku",
    "name": "粉蓝层叠和服＋兔饰",
    "prompt": "yuki miku \\(2023\\), vocaloid, 1girl, blue eyes, very long hair, blue hair, gradient hair, light blue hair, pink hair, crescent hair ornament, twintails, hair bow, hair ribbon, fur-trimmed kimono, blue kimono, pink kimono, layered kimono, blue gloves, pom pom (clothes), long sleeves, wide sleeves, pink bowtie, pink bow, blue bow, rabbit, headdress, bonnet"
  },
  {
    "group": "miku",
    "name": "和风厨艺主题，围裙＋叉勺发饰",
    "prompt": "yuki miku \\(2024\\), vocaloid, 1girl, aqua eyes, green eyes, fork hair ornament, spoon hair ornament, very long hair, aqua hair, green hair, twintails, low twin braids, hair bow, hairclip, brown kimono, checkered kimono, orange kimono, white apron, frilled apron, checkered clothes, chef hat, lace-up boots, wide sleeves, white bow, long sleeves, star earrings, kappougi, rabbit, animal, shrimp, button badge"
  },
  {
    "group": "miku",
    "name": "黑暗反转版，红瞳黑发",
    "prompt": "zatsune miku, vocaloid, 1girl, red eyes, black hair, very long hair, twintails, thighhighs, necktie"
  },
  {
    "group": "miku",
    "name": "运动制服＋护目镜与臂章",
    "prompt": "fighting miku \\(project voltage\\), pokemon, 1girl, hair between eyes, green eyes, yellow eyes, multicolored eyes, eyeshadow, orange eyeshadow, white hair, very long hair, orange hair, streaked hair, green hair, gradient hair, twintails, white gloves, white thighhighs, visor cap, black shorts, long sleeves, white necktie, armband, green armband"
  },
  {
    "group": "miku",
    "name": "透纱裙＋幽灵意象，袖过指漂浮感",
    "prompt": "ghost miku \\(project voltage\\), pokemon, 1girl, pale skin, yellow eyes, hair between eyes, very long hair, aqua hair, gradient hair, blue hair, twintails, grey shirt, black thighhighs, see-through skirt, sleeveless shirt, detached sleeves, sleeves past fingers, bare shoulders, black sleeves, necktie, ghost, detached arm"
  },
  {
    "group": "miku",
    "name": "粉紫渐变发＋机能外套",
    "prompt": "poison miku \\(project voltage\\), pokemon, 1girl, blue eyes, pink eyes, multicolored eyes, colored eyelashes, goggles on head, pink hair, purple hair, multicolored hair, blonde hair, very long hair, long hair, twintails, pink gloves, open coat, multicolored coat, platform footwear, green sleeves, puffy long sleeves, black jumpsuit, short jumpsuit"
  },
  {
    "group": "miku",
    "name": "偶像系白裙＋分体领饰",
    "prompt": "more more jump! miku, project sekai, 1girl, floating hair, hair between eyes, aqua eyes, blue eyes, aqua hair, very long hair, blue hair, twintails, sidelocks, hair ornament, checkered clothes, white dress, detached collar, earrings, dot nose, idol"
  },
  {
    "group": "miku",
    "name": "街头系颈环＋连帽外套＋耳环",
    "prompt": "vivid bad squad miku, project sekai, 1girl, aqua eyes, blue eyes, aqua hair, long hair, green hair, very long hair, twintails, double bun, collarbone, white shirt, long sleeves, black choker, hood down, vivid bad squad (project sekai), nail polish, fingernails, hoop earrings"
  },
  {
    "group": "miku",
    "name": "黑裙＋双马尾，舞台亮点",
    "prompt": "magical mirai miku \\(2017\\), magical mirai \\(vocaloid\\), 1girl, aqua eyes, hair between eyes, blue eyes, aqua hair, very long hair, blue hair, twintails, black skirt, detached sleeves"
  },
  {
    "group": "miku",
    "name": "条纹礼裙＋小礼帽",
    "prompt": "magical mirai miku \\(2019\\), magical mirai \\(vocaloid\\), 1girl, aqua eyes, hair between eyes, blue eyes, very long hair, aqua hair, blue hair, twintails, hair ornament, white gloves, mini top hat, white headwear, striped clothes, striped thighhighs, vertical-striped clothes, bare shoulders"
  },
  {
    "group": "miku",
    "name": "黄裙＋白外套＋贝雷帽",
    "prompt": "magical mirai miku \\(2024\\), magical mirai \\(vocaloid\\), 1girl, aqua eyes, aqua hair, very long hair, blonde hair, gradient hair, two-tone hair, twintails, hair ornament, yellow skirt, shorts under skirt, white jacket, pleated skirt, white shorts, cropped jacket, pink bowtie, shoulder bag, long sleeves, aqua nails, pink nails, nail polish, beret, double-breasted, sneakers, white hat"
  },
  {
    "group": "miku",
    "name": "白礼裙＋金边，交响音乐会风",
    "prompt": "gramophone miku, miku symphony \\(vocaloid\\), 1girl, floating hair, green eyes, hair between eyes, green hair, very long hair, absurdly long hair, aqua hair, twintails, hair ornament, white dress, strapless dress, white thighhighs, see-through dress, bare shoulders, bracelet, gold trim"
  },
  {
    "group": "吊带袜天使",
    "name": "潘缇",
    "prompt": "panty \\(psg\\), panty & stocking with garterbelt, 1girl, blue eyes, blonde hair, long hair, ahoge, medium breasts"
  },
  {
    "group": "吊带袜天使",
    "name": "斯多金",
    "prompt": "stocking \\(psg\\), panty & stocking with garterbelt, 1girl, blue eyes, colored inner hair, two-tone hair, long hair, pink hair, blue hair, purple hair, very long hair, blunt bangs, hair bow, striped clothes, striped thighhighs"
  },
  {
    "group": "吊带袜天使",
    "name": "斯坎蒂",
    "prompt": "scanty \\(psg\\), panty & stocking with garterbelt, 1girl, demon girl, red skin, horns, fang, green eyes, yellow eyes, green hair, long hair"
  },
  {
    "group": "吊带袜天使",
    "name": "尼索克斯",
    "prompt": "kneesocks \\(psg\\), panty & stocking with garterbelt, 1girl, demon girl, red skin, single horn, fang, pointy ears, green eyes, yellow eyes, glasses, long hair, blue hair, white hair, ponytail"
  },
  {
    "group": "中二病也要谈恋爱",
    "name": "小鸟游六花",
    "prompt": "takanashi rikka, chuunibyou demo koi ga shitai!, 1girl, blue eyes, medical eyepatch, short hair, black hair, blue hair, ahoge, hair ribbon, icho private high school uniform, black thighhighs, plaid skirt, one side up"
  },
  {
    "group": "中二病也要谈恋爱",
    "name": "五月七日茴香",
    "prompt": "dekomori sanae, chuunibyou demo koi ga shitai!, 1girl, blue eyes, blonde hair, long hair, twintails, icho private high school uniform"
  },
  {
    "group": "一拳超人",
    "name": "战栗的龙卷",
    "prompt": "tatsumaki, one-punch man, 1girl, green eyes, green hair, short hair, curly hair, small breasts, thighs, black dress"
  },
  {
    "group": "一拳超人",
    "name": "怪人姬·毒刺",
    "prompt": "kaijin hime do-s, one-punch man, 1girl, mouth mask, red eyes, long hair, blonde hair, hair flower, navel, outfit, revealing clothes, elbow gloves, black gloves, black thighhighs, spiked collar, bare shoulders, o-ring, black sclera, dominatrix, forehead mark, whip, heart"
  },
  {
    "group": "一拳超人",
    "name": "地狱吹雪",
    "prompt": "fubuki \\(one-punch man\\), one-punch man, 1girl, green eyes, short hair, black hair, green hair"
  },
  {
    "group": "一拳超人",
    "name": "饿狼",
    "prompt": "garou \\(one-punch man\\), one-punch man, 1boy, yellow eyes, spiked hair, pointy hair, short hair, white hair, muscular male, abs"
  },
  {
    "group": "一拳超人",
    "name": "埼玉",
    "prompt": "saitama \\(one-punch man\\), one-punch man, 1boy, cape, bald, superhero costume"
  },
  {
    "group": "旋风管家",
    "name": "桂雏菊",
    "prompt": "katsura hinagiku, hayate no gotoku!, 1girl, yellow eyes, pink hair, long hair, hakuo school uniform"
  },
  {
    "group": "旋风管家",
    "name": "三千院凪",
    "prompt": "sanzen'in nagi, hayate no gotoku!, 1girl, green eyes, long hair, blonde hair, twintails"
  },
  {
    "group": "旋风管家",
    "name": "濑川泉",
    "prompt": "segawa izumi, hayate no gotoku!, 1girl, red eyes, purple hair, short hair, twintails, hakuo school uniform"
  },
  {
    "group": "旋风管家",
    "name": "绫崎飒",
    "prompt": "ayasaki hayate, hayate no gotoku!, 1boy, blue eyes, blue hair"
  },
  {
    "group": "新妹魔王的契约者",
    "name": "成濑澪",
    "prompt": "naruse mio, shinmai maou no testament, 1girl, red eyes, red hair, long hair, two side up, hair intakes, twintails, hair ribbon, navel"
  },
  {
    "group": "新妹魔王的契约者",
    "name": "成濑万理亚",
    "prompt": "naruse maria, shinmai maou no testament, 1girl, demon girl, demon tail, pointy ears, purple eyes, long hair, grey hair, blunt bangs, small breasts, underboob, navel, striped thighhighs, striped clothes"
  },
  {
    "group": "机甲少女",
    "name": "巴兹拉德",
    "prompt": "baselard, frame arms girl, 1girl, green eyes, blonde hair, long hair, small breasts, covered navel, elbow gloves, white gloves, black pantyhose, white leotard, bare shoulders, mecha musume, headgear"
  },
  {
    "group": "机甲少女",
    "name": "轰雷",
    "prompt": "gourai, frame arms girl, 1girl, blue eyes, short hair, blonde hair, armor, elbow gloves, striped panties, striped clothes, black gloves, black thighhighs, bare shoulders, mecha musume, headgear"
  },
  {
    "group": "机甲少女",
    "name": "史蒂蕾特",
    "prompt": "stylet, frame arms girl, 1girl, blue eyes, hair between eyes, blue hair, very long hair, long hair, twintails, elbow gloves, black gloves, striped panties, striped clothes, black thighhighs, mecha musume, headgear"
  },
  {
    "group": "overlord",
    "name": "安兹·乌尔·恭",
    "prompt": "ainz ooal gown, overlord \\(maruyama\\), 1girl, demon girl, demon horns, yellow eyes, red eyes, hair between eyes, black hair, long hair, black wings, skeleton"
  },
  {
    "group": "overlord",
    "name": "雅儿贝德",
    "prompt": "albedo \\(overlord\\), overlord \\(maruyama\\), 1girl, demon girl, demon horns, demon wings, white horns, yellow eyes, hair between eyes, slit pupils, black hair, long hair, very long hair, ahoge, white gloves, white dress, bare shoulders, black wings, feathered wings, low wings"
  },
  {
    "group": "overlord",
    "name": "亚乌拉",
    "prompt": "aura bella fiora, overlord \\(maruyama\\), 1girl, dark-skinned female, heterochromia, blue eyes, green eyes, hair between eyes, blonde hair, short hair, ahoge, navel, dark elf"
  },
  {
    "group": "overlord",
    "name": "克莱门汀",
    "prompt": "clementine \\(overlord\\), overlord \\(maruyama\\), 1girl, red eyes, blonde hair, short hair, medium breasts, navel, gauntlets"
  },
  {
    "group": "overlord",
    "name": "恩多玛",
    "prompt": "entoma vasilissa zeta, overlord \\(maruyama\\), 1girl, arthropod girl, monster girl, maid, maid headdress, skin fangs, red eyes, extra pupils, short hair, purple hair, double bun, brown kimono, white apron, ofuda on clothes, sleeves past fingers, wide sleeves, antennae"
  },
  {
    "group": "overlord",
    "name": "鲁普丝雷基娜",
    "prompt": "lupusregina beta, overlord \\(maruyama\\), 1girl, maid, dark-skinned female, yellow eyes, hair between eyes, red hair, long hair, very long hair, twin braids, medium breasts, hat, black choker"
  },
  {
    "group": "overlord",
    "name": "娜贝拉尔",
    "prompt": "narberal gamma, overlord \\(maruyama\\), 1girl, maid, maid headdress, black eyes, black hair, long hair, ponytail, blunt bangs, medium breasts"
  },
  {
    "group": "overlord",
    "name": "夏提雅",
    "prompt": "shalltear bloodfallen, overlord \\(maruyama\\), 1girl, fang, red eyes, very long hair, long hair, white hair, ponytail, hair bow, frilled dress, vampire, gothic lolita"
  },
  {
    "group": "主播女孩重度依赖",
    "name": "糖糖",
    "prompt": "ame-chan \\(needy girl overdose\\), needy girl overdose, 1girl, black eyes, hair over one eye, black hair, long hair, x hair ornament, twintails, red shirt, collared shirt, suspender skirt, black skirt, neck ribbon, black ribbon, black nails"
  },
  {
    "group": "主播女孩重度依赖",
    "name": "超绝最可爱天使酱",
    "prompt": "chouzetsusaikawa tenshi-chan, needy girl overdose, 1girl, quad tails, blue eyes, pink hair, blue hair, multicolored hair, blonde hair, very long hair, long hair, multiple hair bows, twintails, hair bow, serafuku, blue shirt, pleated skirt, blue bow, long sleeves, purple bow, pink bow, sailor collar, yellow bow, multicolored nails"
  },
  {
    "group": "主播女孩重度依赖",
    "name": "超绝最可爱天使酱（黑暗天使形态）",
    "prompt": "chouzetsusaikawa tenshi-chan \\(dark angel\\), needy girl overdose, 1girl, quad tails, black eyes, red hair, multicolored hair, black hair, very long hair, long hair, white hair, grey hair, multiple hair bows, twintails, serafuku, black shirt, black skirt, pleated skirt, long sleeves, black bow, red sailor collar, red bow, boxcutter"
  },
  {
    "group": "主播女孩重度依赖",
    "name": "呜呜猫 / ぴえん猫",
    "prompt": "pien cat \\(needy girl overdose\\), needy girl overdose, 1girl, quad tails, blue eyes, pink hair, blue hair, multicolored hair, blonde hair, long hair, very long hair, twintails, blue shirt, pink bow, blue bow, long sleeves, purple bow, cat"
  },
  {
    "group": "mignon",
    "name": "小白",
    "prompt": "shiro-chan \\(mignon\\),original,white hair,long hair,red eyes,white_thighhighs,dress,small_breasts"
  },
  {
    "group": "mignon",
    "name": "草莓",
    "prompt": "original,long hair,kouhai-chan \\(mignon\\),original,black hair,purple eyes"
  },
  {
    "group": "mignon",
    "name": "草莓",
    "prompt": "original,long hair,black hair,ichigo-chan \\(mignon\\),original,red eyes,sailor,serafuku,black_pantyhose"
  },
  {
    "group": "俺妹",
    "name": "五更琉璃",
    "prompt": "gokou ruri, ore no imouto ga konna ni kawaii wake ga nai, 1girl, cat ears, red eyes, purple eyes, mole under eye, long hair, black hair, hime cut"
  },
  {
    "group": "俺妹",
    "name": "高坂桐乃",
    "prompt": "kousaka kirino, ore no imouto ga konna ni kawaii wake ga nai, 1girl, blue eyes, aqua eyes, long hair, orange hair, blonde hair, hairclip, kousaka kirino's school uniform"
  },
  {
    "group": "俺妹",
    "name": "新垣绫濑",
    "prompt": "aragaki ayase, ore no imouto ga konna ni kawaii wake ga nai, 1girl, blue eyes, long hair, black hair, kousaka kirino's school uniform"
  },
  {
    "group": "樱Trick",
    "name": "园田优",
    "prompt": "sonoda yuu, sakura trick, 1girl, green eyes, blonde hair, short hair, twintails, hair flower, school uniform"
  },
  {
    "group": "樱Trick",
    "name": "高山春香",
    "prompt": "takayama haruka, sakura trick, 1girl, brown eyes, red eyes, brown hair, red hair, long hair, hair ribbon, hair ornament, medium breasts, navel, school uniform"
  },
  {
    "group": "异世界魔王与召唤少女的奴隶魔术",
    "name": "蕾姆·嘉蕾邬",
    "prompt": "rem galeu, isekai maou to shoukan shoujo no dorei majutsu, 1girl, cat girl, cat ears, animal ear fluff, cat tail, green eyes, hair between eyes, black hair, long hair, very long hair, flat chest, small breasts, navel, metal collar"
  },
  {
    "group": "异世界魔王与召唤少女的奴隶魔术",
    "name": "雪拉·L·古林伍德",
    "prompt": "shera l. greenwood, isekai maou to shoukan shoujo no dorei majutsu, 1girl, blue eyes, blonde hair, long hair, hairband, navel, elbow gloves, white gloves, white thighhighs, metal collar, elf"
  },
  {
    "group": "珈百璃的堕落",
    "name": "珈百璃·天真·怀特（Gabriel Tenma White）",
    "prompt": "gabriel tenma white, gabriel dropout, 1girl, blue eyes, blonde hair, very long hair, long hair, messy hair, ahoge, track jacket"
  },
  {
    "group": "珈百璃的堕落",
    "name": "拉斐尔·西拉哈·爱因兹渥斯（Raphiel Shiraha Ainsworth）",
    "prompt": "raphiel shiraha ainsworth, gabriel dropout, 1girl, yellow eyes, long hair, white hair, grey hair, very long hair, cross hair ornament, ahoge, medium breasts, school uniform"
  },
  {
    "group": "珈百璃的堕落",
    "name": "撒塔尼亚·库鲁米泽瓦·麦克道威尔（Satanichia Kurumizawa McDowell）",
    "prompt": "satanichia kurumizawa mcdowell, gabriel dropout, 1girl, fang, purple eyes, hair between eyes, red hair, long hair, bat hair ornament, hair rings, collarbone"
  },
  {
    "group": "珈百璃的堕落",
    "name": "塔普里斯·琪萨奇·修格贝尔（Tapris Chisaki Sugarbell）",
    "prompt": "tapris chisaki sugarbell, gabriel dropout, 1girl, green eyes, hair between eyes, blonde hair, short hair, hair flower, school uniform, blue scarf, black pantyhose"
  },
  {
    "group": "珈百璃的堕落",
    "name": "维涅特·月乃濑·亚普莉尔（Vignette Tsukinose April）",
    "prompt": "vignette tsukinose april, gabriel dropout, 1girl, demon girl, demon horns, demon wings, purple eyes, hair between eyes, purple hair, short hair, x hair ornament, hairclip, medium breasts, school uniform"
  },
  {
    "group": "美少女万华镜",
    "name": "莲华《理与迷宫的少女》）比基尼",
    "prompt": "Renge,black bikini, side-tie bikini bottom, hair tubes, white hairband"
  },
  {
    "group": "美少女万华镜",
    "name": "莲华《理与迷宫的少女》）黑色连衣裙",
    "prompt": "Renge,black dress, choker, short sleeves, goth fashion"
  },
  {
    "group": "美少女万华镜",
    "name": "莲华《理与迷宫的少女》）和服",
    "prompt": "Renge, black kimono, japanese clothes, floral print, headband, hair ribbon"
  },
  {
    "group": "美少女万华镜",
    "name": "莲华《理与迷宫的少女》）校服",
    "prompt": "Renge, school uniform, sailor collar, long sleeves, serafuku, red neckerchief, hair tubes, white hairband，black_thighhighs,pleated_skirt"
  },
  {
    "group": "美少女万华镜",
    "name": "香狩乃雾绘（第1部《被诅咒的传说少女》）",
    "prompt": "Kagarino Kirie, school uniform, sailor collar, long sleeves, serafuku, red neckerchief, hair tubes, white hairband"
  },
  {
    "group": "美少女万华镜",
    "name": "沢渡雫（第1部《被诅咒的传说少女》）",
    "prompt": "Sawatari Shizuku, school uniform, sailor collar, pleated skirt, ribbon necktie"
  },
  {
    "group": "美少女万华镜",
    "name": "花里惠（第1部《被诅咒的传说少女》）",
    "prompt": "Hanasato Megumi, casual blouse and skirt, pastel tones, ribbon details"
  },
  {
    "group": "美少女万华镜",
    "name": "莉莉（第4部《神明所创造的少女们》）",
    "prompt": "Lily, elegant dress with floral motifs, light fabrics and soft colors"
  },
  {
    "group": "美少女万华镜",
    "name": "稻森阳（第3部《致曾经是少女的你》）",
    "prompt": "Inamori Haru, everyday outfit – short sleeve blouse, knee-length skirt, simple style"
  },
  {
    "group": "美少女万华镜",
    "name": "爱丽丝（第4部《神明所创造的少女们》）",
    "prompt": "Alice, Victorian / Lolita style dress, puffed sleeves, lace trim, waist ribbon"
  },
  {
    "group": "美少女万华镜",
    "name": "多萝西（第4部《神明所创造的少女们》）",
    "prompt": "Dorothy, fantasy-themed dress, high boots, decorative trims and frills"
  },
  {
    "group": "美少女万华镜",
    "name": "神凪友里（第5部《罪与罚的少女》）",
    "prompt": "Kannagi Yuuri, modern school uniform or blazer + skirt with neat lines"
  },
  {
    "group": "美少女万华镜",
    "name": "神凪悠真（第5部《罪与罚的少女》）",
    "prompt": "Kannagi Yuuma, smart casual wear – blazer, dress shirt, trousers"
  },
  {
    "group": "美少女万华镜",
    "name": "御殿场京子（第5部《罪与罚的少女》）",
    "prompt": "Gotenba Kyouko, sporty casual – jacket, short skirt / shorts, sneakers"
  },
  {
    "group": "美少女万华镜",
    "name": "藤堂咲（第5部《罪与罚的少女》）",
    "prompt": "Toudou Saki, refined dress with elegant accessories – gloves, jewelry"
  },
  {
    "group": "美少女万华镜",
    "name": "铃森一花（第5部《罪与罚的少女》）",
    "prompt": "Suzumori Ichika, cute frilly dress, bows, lace accents"
  },
  {
    "group": "美少女万华镜",
    "name": "月冈枯（第6部《理与迷宫的少女》）",
    "prompt": "Tsukioka Karen, dark elegant attire – black dress, high collar, gothic elements"
  },
  {
    "group": "美少女万华镜",
    "name": "七山茉世香（第6部《理与迷宫的少女》）",
    "prompt": "Nanayama Moyoka, charming casual outfit – pastel dress, soft accessories"
  },
  {
    "group": "美少女万华镜",
    "name": "白雪姬（外传《异闻·雪女》）",
    "prompt": "Shirayuki Hime, pure white gown, princess / snow maiden style, delicate lace"
  },
  {
    "group": "单个角色",
    "name": "明日同学的水手服",
    "prompt": "akebi komichi, akebi-chan no serafuku, 1girl, blue eyes, long hair, black hair, serafuku, roubai academy school uniform (old), pleated skirt, white shirt, long sleeves, black sailor collar"
  },
  {
    "group": "单个角色",
    "name": "希尔薇",
    "prompt": "ylvie \\(dorei to no seikatsu\\), dorei to no seikatsu ~teaching feeling~, 1girl, blue eyes, purple eyes, black hair, long hair, ponytail, hairclip, burn scar"
  },
  {
    "group": "单个角色",
    "name": "笨拙的上野",
    "prompt": "ueno \\(ueno-san wa bukiyou\\), ueno-san wa bukiyou, 1girl, fang, orange eyes, hair between eyes, red eyes, v-shaped eyebrows, very long hair, orange hair, twintails, sweat, serafuku, short sleeves"
  },
  {
    "group": "单个角色",
    "name": "as109 alice",
    "prompt": "alice \\(as109\\), original, 1girl, loli, blue eyes, long hair, grey hair, two side up, hairclip, flat chest, china dress, side-tie panties, detached sleeves, bare shoulders"
  },
  {
    "group": "单个角色",
    "name": "史莱姆娘",
    "prompt": "half slime-chan, original, 1girl, slime girl, blue eyes, blue hair, very long hair, long hair, double bun, sidelocks, convenient censoring, navel, barefoot, collarbone"
  },
  {
    "group": "单个角色",
    "name": "原创猫娘角色",
    "prompt": "prunechi, original, 1girl, cat girl, cat ears, cat tail, fake animal ears, animal ear hairband, cat ear hairband, red eyes, mole under eye, brown hair, short hair, hairband, small breasts, mole on breast, thighs, mole on thigh, covered navel, collarbone, white thighhighs, red jacket, open jacket, skindentation, bare shoulders, red collar, off shoulder, animal collar, neck bell, jingle bell"
  },
  {
    "group": "单个角色",
    "name": "魅魔妈妈（原创）",
    "prompt": "sakyumama \\(kedama milk\\), original, 1girl, demon tail, demon girl, pointy ears, fang, heart tail, purple eyes, slit pupils, pink hair, very long hair, two side up, sidelocks, small breasts, thighs, navel, elbow gloves, bare shoulders, head wings, stomach"
  },
  {
    "group": "单个角色",
    "name": "萨莎",
    "prompt": "sasha \\(haguhagu\\), original, 1girl, blue eyes, long hair, blonde hair, flat chest, forehead"
  },
  {
    "group": "单个角色",
    "name": "绯弹的亚里亚 神崎·H·亚里亚",
    "prompt": "kanzaki h. aria, hidan no aria, 1girl, fang, horn hair ornament, red eyes, pink hair, very long hair, twintails, serafuku, black thighhighs"
  },
  {
    "group": "单个角色",
    "name": "机巧少女不会受伤 夜夜",
    "prompt": "yaya \\(machine-doll\\), machine-doll wa kizutsukanai, 1girl, red eyes, black hair, long hair, hair ribbon, black kimono, white thighhighs, bare shoulders, obi"
  },
  {
    "group": "单个角色",
    "name": "天使的3P！ 蕾切尔·加德纳",
    "prompt": "gotou jun, tenshi no 3p!, 1girl, purple eyes, purple hair, very long hair, long hair, hair ribbon, ribbon, one side up"
  },
  {
    "group": "单个角色",
    "name": "彻夜之歌 七草荠",
    "prompt": "nanakusa nazuna \\(yofukashi no uta\\), yofukashi no uta, 1girl, blue eyes, ringed eyes, short hair, grey hair, braided hair rings, blunt bangs, braid, hair rings, small breasts, navel, sleeveless turtleneck, black nails, crop top"
  },
  {
    "group": "单个角色",
    "name": "缘之空 春日野穹",
    "prompt": "kasugano sora, yosuga no sora, 1girl, brown eyes, long hair, white hair, very long hair, grey hair, twintails, hair ribbon"
  },
  {
    "group": "单个角色",
    "name": "艾莉同学",
    "prompt": "alisa mikhailovna kujou, tokidoki bosotto roshia-go de dereru tonari no alya-san, 1girl, blue eyes, hair between eyes, long hair, white hair, grey hair, ahoge, hair ribbon, school uniform, red ribbon, long sleeves"
  },
  {
    "group": "单个角色",
    "name": "长瀞同学 长瀞早濑",
    "prompt": "nagatoro hayase, ijiranaide nagatoro-san, 1girl, dark-skinned female, brown eyes, long hair, black hair, hairclip, small breasts, school uniform, earclip"
  },
  {
    "group": "单个角色",
    "name": "樱岛麻衣",
    "prompt": "sakurajima mai, seishun buta yarou, 1girl, rabbit ears, fake animal ears, purple eyes, blue eyes, black hair, long hair, rabbit hair ornament, hairclip, medium breasts, black leotard, strapless leotard, black pantyhose, detached collar, black bowtie, playboy bunny, wrist cuffs"
  },
  {
    "group": "单个角色",
    "name": "甲铁城的卡巴内瑞 无名",
    "prompt": "mumei \\(kabaneri\\), koutetsujou no kabaneri, 1girl, red eyes, brown eyes, short hair, brown hair, black hair, twintails, hair ribbon, medium breasts, short kimono, ribbon choker, long sleeves"
  },
  {
    "group": "单个角色",
    "name": "西片千",
    "prompt": "nishikata chii, karakai jouzu no takagi-san, 1girl, brown eyes, brown hair, medium hair, parted bangs, serafuku, long sleeves, forehead, red neckerchief"
  },
  {
    "group": "单个角色",
    "name": "高木同学",
    "prompt": "takagi-san, karakai jouzu no takagi-san, 1girl, loli, brown eyes, brown hair, long hair, parted bangs, serafuku, white shirt, forehead"
  },
  {
    "group": "单个角色",
    "name": "在地下城寻求邂逅是否搞错了什么 赫斯缇亚",
    "prompt": "hestia \\(danmachi\\), dungeon ni deai wo motomeru no wa machigatteiru darou ka, 1girl, blue eyes, black hair, long hair, very long hair, twintails, hair ribbon, cutout, white gloves, white dress, pencil dress, blue ribbon, rei no himo"
  },
  {
    "group": "单个角色",
    "name": "时雨羽衣",
    "prompt": "shigure ui \\(vtuber) (young\\), indie virtual youtuber, 1girl, green eyes, blonde hair, short hair, light brown hair, pom pom hair ornament, twintails, blunt bangs, school uniform, white shirt, pinafore dress, blue dress, collared shirt, pleated dress, long sleeves, red bowtie, virtual youtuber, red bag, crime prevention buzzer, randoseru"
  },
  {
    "group": "单个角色",
    "name": "Lucy",
    "prompt": "lucy \\(cyberpunk\\),cyberpunk \\(series\\),cyberpunk edgerunners,1girl,blue eyes,multicolored eyes,short hair,multicolored hair,white hair,parted bangs,medium breasts,bare shoulders,eyeliner,red eyeliner,cyborg,multicolored eyes,grey hair,medium breasts,medium hair,cropped jacket,clothing cutout,off shoulder,shorts,belt,black belt,black leotard,black pants,long sleeves,mechanical parts,open clothes,open jacket,red eyeliner,short hair with long locks,short shorts,sidelocks,thigh cutout,white jacket,white shorts,gradient eyes,grey eyes,humanoid_robot_,bob cut,bangs,bishoujo,adorable_girl,teenager,solo,tight,spandex,looking_at_viewer,underage,revealing clothes,teasing_pose,playful_expression"
  },
  {
    "group": "单个角色",
    "name": "螃蟹公",
    "prompt": "kani nayuta, imouto sae ireba ii, 1girl, blue eyes, long hair, silver hair, grey hair, very long hair, ahoge, swept bangs, hair scrunchie, medium breasts, navel, collarbone, blue scrunchie"
  },
  {
    "group": "单个角色",
    "name": "椎名真白",
    "prompt": "shiina mashiro, sakura-sou no pet na kanojo, 1girl, red eyes, orange eyes, long hair, blonde hair, medium breasts, school uniform"
  },
  {
    "group": "单个角色",
    "name": "艾拉 可塑性记忆",
    "prompt": "isla \\(plastic memories\\), plastic memories, 1girl, red eyes, long hair, silver hair, white hair, very long hair, ahoge, twintails, employee uniform, detached sleeves"
  },
  {
    "group": "单个角色",
    "name": "瑞吉儿·加德纳",
    "prompt": "rachel gardner, satsuriku no tenshi, 1girl, blue eyes, hair between eyes, blonde hair, very long hair, long hair, collarbone, striped clothes, striped shirt, open jacket, white jacket, black shorts, long sleeves"
  },
  {
    "group": "单个角色",
    "name": "逢坂大河 龙与虎",
    "prompt": "aisaka taiga, toradora!, 1girl, brown eyes, hair between eyes, brown hair, long hair, oohashi high school uniform"
  },
  {
    "group": "单个角色",
    "name": "佐佐木康娜",
    "prompt": "sasaki kanna \\(kaedeko\\), gaki kyonyuu, 1girl, one-piece tan, fang, red eyes, hair between eyes, black hair, short hair, wavy hair, short twintails, hair tie, thighs, navel, collarbone, short shorts, grey shorts, denim shorts, bare shoulders, oppai loli, yellow camisole"
  }
];

const outfitData = [
  {
    "group": "日常服装",
    "name": "女仆",
    "prompt": "maid outfit,maid headdress,frilly apron,lace cuffs,thighhigh white stockings,black mary janes,ribbon choker"
  },
  {
    "group": "日常服装",
    "name": "校园",
    "prompt": "sailor uniform,pleated skirt,ribbon bow,knee socks,loafers,blazer uniform,plaid skirt,necktie,black thighhighs"
  },
  {
    "group": "日常服装",
    "name": "水手服",
    "prompt": "serafuku,pleated skirt,sailor collar,loafers,thighhighs,sailor,school uniform"
  },
  {
    "group": "日常服装",
    "name": "中二病姿势",
    "prompt": "chuunibyou pose,dramatic hand gesture,one eye covered pose,pointing pose,crossed arms pose,edgy hand sign,magic circle pose"
  },
  {
    "group": "日常服装",
    "name": "洛丽塔",
    "prompt": "lolita dress,puff sleeves,lace headband,bow ribbon,overknee socks,platform shoes,gothic lolita,corset bodice,lace gloves,striped thighhighs"
  },
  {
    "group": "日常服装",
    "name": "偶像",
    "prompt": "idol costume,frilly skirt,idol gloves,thighhigh stockings,ankle boots,idol clothes,detached collar,bare shoulders,virtual youtuber,facial mark,idol,wrist cuffs,bare shoulders,virtual youtuber"
  },
  {
    "group": "日常服装",
    "name": "啦啦队",
    "prompt": "frilly skirt,thighhigh stockings,ankle boots,cheerleader uniform,pom poms,cheerleader,covered navel,armpit cutout,sweat,leotard under clothes,pleated skirt,white skirt,long sleeves,miniskirt,crop top,midriff"
  },
  {
    "group": "日常服装",
    "name": "和风",
    "prompt": "kimono,obi,hairpin,tabi socks,geta,shrine maiden outfit,hakama,haori"
  },
  {
    "group": "日常服装",
    "name": "兔女郎护士",
    "prompt": "bunny girl outfit,bunny ears,fishnet stockings,nurse uniform,nurse cap,stethoscope,magical girl costume,magic wand,long gloves"
  },
  {
    "group": "日常服装",
    "name": "日常休闲",
    "prompt": "hoodie,oversized sweater,tshirt,denim shorts,ankle socks,sneakers"
  },
  {
    "group": "日常服装",
    "name": "礼服",
    "prompt": "evening gown,high slit dress,cocktail dress,long trail dress,opera gloves,pearl necklace,stiletto heels"
  },
  {
    "group": "日常服装",
    "name": "情趣内衣",
    "prompt": "lingerie,babydoll,corset,garter belt,lace panties,sheer stockings,silk robe,thighhighs"
  },
  {
    "group": "日常服装",
    "name": "瑜伽裤",
    "prompt": "tracksuit,sports bra,running shorts,yoga pants,sweatband,sneakers"
  },
  {
    "group": "日常服装",
    "name": "运动",
    "prompt": "sportswear,gym uniform,navel,sweat,collarbone,sports bra,shorts,shoes,cross-laced footwear,socks,heavy breathing,shiny skin"
  },
  {
    "group": "日常服装",
    "name": "泳装",
    "prompt": "bikini,swimsuit,one piece swimwear,sarong,flip flops,beach sandals,thong bikini"
  },
  {
    "group": "日常服装",
    "name": "中式旗袍",
    "prompt": "cheongsam,qipao,silk dress,mandarin collar,embroidered dress,high slit qipao"
  },
  {
    "group": "日常服装",
    "name": "汉服",
    "prompt": "hanfu,ruqun,long sleeves,cloud pattern,silk ribbon,traditional belt"
  },
  {
    "group": "日常服装",
    "name": "军装",
    "prompt": "military uniform,camouflage,combat boots,epaulettes,military uniform,peaked cap,military hat,detached sleeves,bare shoulders,military uniform,capelet,black thighhighs,micro shorts,sideboob"
  },
  {
    "group": "日常服装",
    "name": "警察",
    "prompt": "police uniform,police hat,tight clothes,policewoman,police uniform,tactical clothes,bulletproof vest,pencil skirt,cropped shirt"
  },
  {
    "group": "日常服装",
    "name": "医生/研究员",
    "prompt": "doctor coat,lab coat,stethoscope,id badge,white coat,lab coat,open coat,shirt,scales,doctor,white thighhighs,white shirt,micro shorts"
  },
  {
    "group": "日常服装",
    "name": "空乘制服",
    "prompt": "flight attendant uniform,pencil skirt,high heels,leggings"
  },
  {
    "group": "日常服装",
    "name": "奴隶",
    "prompt": "brand,tattered outfit,loose fit,worn fabric texture,frayed clothes,bandages,rope belt"
  },
  {
    "group": "日常服装",
    "name": "维多利亚",
    "prompt": "victorian dress,corset,lace parasol,leggings"
  },
  {
    "group": "日常服装",
    "name": "中世纪骑士",
    "prompt": "armor,cape,sword,chainmail,armor,shoulder armor,breastplate,revealing clothes,bikini armor"
  },
  {
    "group": "日常服装",
    "name": "宫廷礼服",
    "prompt": "royal_dress,crown,jewel_necklace,long_gloves"
  },
  {
    "group": "日常服装",
    "name": "法师",
    "prompt": "mage_robe,wizard_hat,staff,spellbook,witch hat,cape,elbow gloves"
  },
  {
    "group": "日常服装",
    "name": "刺客",
    "prompt": "assassin_outfit,hood,dagger,black_thighhighs,underboob,elbow gloves,revealing clothes,thighhighs,sword,dagger"
  },
  {
    "group": "日常服装",
    "name": "精灵",
    "prompt": "elf_outfit,leaf_crown,forest_cloak,barefoot"
  },
  {
    "group": "日常服装",
    "name": "消防员",
    "prompt": "firefighter_uniform,fire_helmet,fire_hose,boots,reflective_stripes,oxygen_tank"
  },
  {
    "group": "日常服装",
    "name": "囚犯",
    "prompt": "prison_uniform,shackles,handcuffs,chain restraint,prison clothes,prison,prison cell,prisoner"
  },
  {
    "group": "日常服装",
    "name": "赛车手",
    "prompt": "racing_suit,gloves,racing_helmet,boots,sponsor_logos,zipper_front"
  },
  {
    "group": "日常服装",
    "name": "特殊女仆",
    "prompt": "maid bikini,maid headdress,detached collar,thighhighs,frills,ribbon,arm garter,leg garter,wrist cuffs,revealing clothes,maid_apron,rating_explicit,rating_questionable"
  },
  {
    "group": "日常服装",
    "name": "希腊长袍",
    "prompt": "toga,laurel_crown,sandals,greek_robe,greek_patterns"
  },
  {
    "group": "日常服装",
    "name": "罗马角斗士",
    "prompt": "gladiator_outfit,leather_armor,gladiator_helmet,sandals,shield,spear"
  },
  {
    "group": "日常服装",
    "name": "圣骑士",
    "prompt": "paladin_armor,holy_symbol,long_cloak,shield,mace,cross_emblem"
  },
  {
    "group": "日常服装",
    "name": "死神",
    "prompt": "reaper_cloak,scythe,hood,tattered_robes,black_thighhighs,grim reaper,stiletto_heels,choker"
  },
  {
    "group": "日常服装",
    "name": "盗贼",
    "prompt": "rogue_outfit,mask,daggers,hooded_cloak,leather_boots,belt_pouches"
  },
  {
    "group": "日常服装",
    "name": "科幻装甲",
    "prompt": "nanotech_suit,hologram_accessory,floating_drone,cybervisor,glowing_lines"
  },
  {
    "group": "日常服装",
    "name": "木乃伊",
    "prompt": "mummy_costume,bandages,amulet,golden_bracelet,undead_skin"
  },
  {
    "group": "日常服装",
    "name": "疯狂博士",
    "prompt": "mad_scientist_coat,crazy_hair,gloves,thigh boots,navel,white thighhighs,c-string,mad_scientist_coat,gloves,syringe,potion_bottle,messy hair,monocle"
  },
  {
    "group": "日常服装",
    "name": "复活节兔子",
    "prompt": "easter_bunny,egg_basket,pastel_colors,rabbit_ears,ribbon_dress"
  },
  {
    "group": "日常服装",
    "name": "情人节装",
    "prompt": "valentine_dress,heart_accessory,cupid_bow,pink_stockings,love_letter"
  },
  {
    "group": "日常服装",
    "name": "朋克",
    "prompt": "punk_outfit,leather_jacket,chains,boots,punk,black jacket,hooded jacket,tattoo,black_thighhighs,gyaru,metal collar,stud earrings,thigh_strap,skull hair ornament,revealing clothes,teasing_pose,shiny_skin, in mouth,Slightly_open_mouth"
  },
  {
    "group": "日常服装",
    "name": "哥特",
    "prompt": "gothic_outfit,black_dress,chokers,lace_gloves,fishnet_stockings"
  },
  {
    "group": "日常服装",
    "name": "街头潮流",
    "prompt": "streetwear,crop_top,baggy_pants,sneakers,cap,hoodie"
  },
  {
    "group": "日常服装",
    "name": "未来机能风",
    "prompt": "techwear,tactical_vest,mask,neon_stripes,cargo_pants,gloves"
  },
  {
    "group": "日常服装",
    "name": "湿身校服",
    "prompt": "wet_shirt,see_through_blouse,bra_visible,pleated_skirt,dripping_hair,school_uniform,sailor,serafuku"
  },
  {
    "group": "日常服装",
    "name": "透纱睡衣",
    "prompt": "sheer_nightgown,lace_trim,ribbon_straps,bare_shoulders,nightwear"
  },
  {
    "group": "日常服装",
    "name": "宽松衬衫",
    "prompt": "oversized_shirt,bare_legs,collar_loosened,messy_hair,morning_light"
  },
  {
    "group": "日常服装",
    "name": "赛博朋克",
    "prompt": "cyberpunk_outfit,neon_jacket,hologram,cyberpunk \\(series\\),leg tattoo,neck tattoo,stomach tattoo,cyborg,1girl,bare shoulders,micro_shorts,leotard,thighhighs"
  },
  {
    "group": "日常服装",
    "name": "机甲驾驶员",
    "prompt": "pilot_uniform,gloves,covered navel,white bodysuit,impossible bodysuit,girdle,neon genesis evangelion"
  },
  {
    "group": "日常服装",
    "name": "宇航员",
    "prompt": "space_suit,helmet,boots,space helmet,bodysuit"
  },
  {
    "group": "日常服装",
    "name": "婚纱",
    "prompt": "wedding_dress,veil,bouquet,high_heels"
  },
  {
    "group": "日常服装",
    "name": "圣诞老人",
    "prompt": "santa_costume,santa_hat,red_cape,fur_trim,belt,boots"
  },
  {
    "group": "日常服装",
    "name": "圣诞少女",
    "prompt": "christmas_dress,red_skirt,white_fur_trim,striped_stockings,gift_box，thighhighs,striped_legwear"
  },
  {
    "group": "日常服装",
    "name": "圣诞小精灵",
    "prompt": "elf_costume,green_tunic,pointed_hat,striped_tights,curly_shoes"
  },
  {
    "group": "日常服装",
    "name": "雪之女王",
    "prompt": "snow_queen_dress,ice_crown,long_trail,frost_pattern,crystal_staff"
  },
  {
    "group": "日常服装",
    "name": "驯鹿",
    "prompt": "reindeer_costume,antler_headband,brown_bodysuit,red_nose,tail"
  },
  {
    "group": "日常服装",
    "name": "女巫",
    "prompt": "witch_costume,pointed_hat,magic_broom,cape,black cloak,witch hat,long sleeves,skirt,thighs,black dress,black_thighhighs"
  },
  {
    "group": "日常服装",
    "name": "吸血鬼",
    "prompt": "vampire_outfit,fangs,red eyes,heart,bare shoulders,fang,frilled dress,vampire,gothic lolita"
  },
  {
    "group": "日常服装",
    "name": "魅魔",
    "prompt": "succubus_outfit,bat_wings,demon_horns,tail,lace_stockings"
  },
  {
    "group": "日常服装",
    "name": "幽灵",
    "prompt": "ghost_costume,white_sheet,floating,hood up,sharp fingernails,ghost,halloween costume,ghost costume"
  },
  {
    "group": "日常服装",
    "name": "僵尸",
    "prompt": "zombie_outfit,torn_clothes,blood_stains,zombie,pale_skin,naughty_face"
  },
  {
    "group": "日常服装",
    "name": "骷髅",
    "prompt": "skeleton_costume,bone_pattern,black_cloak,cosplay,shoulder armor,see-through body,bone,skeleton,breastplate,gauntlets"
  },
  {
    "group": "日常服装",
    "name": "南瓜装",
    "prompt": "pumpkin_dress,striped_stockings,jackolantern,pumpkin hair ornament,sleeveless shirt,collared shirt,belt,bare shoulders,necktie,halloween costume"
  },
  {
    "group": "日常服装",
    "name": "万圣节服装",
    "prompt": "lantern_dress,moon_pattern,floral_hanfu,black dress,juliet sleeves,frilled sleeves,orange ribbon,neck ribbon,halloween costume,ghost,lantern,white ascot"
  },
  {
    "group": "日常服装",
    "name": "新年旗袍",
    "prompt": "qipao,cheongsam,silk_dress,mandarin collar,embroidered pattern"
  },
  {
    "group": "日常服装",
    "name": "舞狮",
    "prompt": "lion_dance_costume,lion_head,red_tassel,belt"
  },
  {
    "group": "日常服装",
    "name": "宫灯少女",
    "prompt": "lantern_dress,red_ribbon,golden_embroidery,paper_lantern"
  },
  {
    "group": "日常服装",
    "name": "财神",
    "prompt": "god_of_wealth_costume,gold_ingot,red_robes,official_hat"
  },
  {
    "group": "日常服装",
    "name": "熊套装",
    "prompt": "beast_costume,furry_cloak,virtual youtuber,bear costume"
  },
  {
    "group": "日常服装",
    "name": "西域舞娘",
    "prompt": "belly_dancer_outfit,veil,coin_belt,beaded_bra,sheer_pants,anklet,hip_scarf"
  },
  {
    "group": "日常服装",
    "name": "阿拉伯公主",
    "prompt": "arabian_princess_outfit,jewelled_tiara,harem_pants,golden_bracelets"
  },
  {
    "group": "日常服装",
    "name": "吉普赛风",
    "prompt": "gypsy_dress,colorful_scarf,large_earrings,ankle_skirt,waist_belt"
  },
  {
    "group": "日常服装",
    "name": "弗拉明戈",
    "prompt": "flamenco_dress,ruffled_skirt,flower_hairpin,red_rose,hand_fan"
  },
  {
    "group": "日常服装",
    "name": "印度纱丽",
    "prompt": "indian_sari,bindi,nose_ring,henna,anklets,gold_jewelry,indian clothes,earrings,necklace,navel,earrings,necklace,indian,forehead mark,bindi,crop top,midriff"
  },
  {
    "group": "日常服装",
    "name": "部落风",
    "prompt": "tribal_outfit,beaded_necklace,fringe_skirt,barefoot,dirty_clothes"
  },
  {
    "group": "日常服装",
    "name": "埃及女王",
    "prompt": "egyptian_queen_outfit,headpiece,beaded_collar,gold_bangles,hair tubes,jewelry,armlet,anklet,egyptian"
  },
  {
    "group": "日常服装",
    "name": "芭蕾舞",
    "prompt": "ballet_outfit,tutu_skirt,ballet_slippers,ribbon_ties,white_pantyhose"
  },
  {
    "group": "日常服装",
    "name": "拉丁舞",
    "prompt": "latin_dress,fringe_skirt,high_heels,wearing latin_dance_dress,dancing,dance_pose,dynamic_pose,hair_flying,one_leg_up"
  },
  {
    "group": "日常服装",
    "name": "歌剧舞台",
    "prompt": "opera_costume,mask,long_gloves,feather_cape"
  },
  {
    "group": "日常服装",
    "name": "猫娘",
    "prompt": "cat_ears,cat_tail,paw_gloves,choker_bell,cat_stockings,animal_feet,cat paw shoes,wearing animal paw shoes,animal_ears"
  },
  {
    "group": "日常服装",
    "name": "狐娘",
    "prompt": "fox_ears,fox_tail,paw_gloves,paw_boots,kimono,ribbon_bell"
  },
  {
    "group": "日常服装",
    "name": "兔女郎",
    "prompt": "bunny_tail,fishnet_stockings,bunny_leotard,cuffs,high_heels,rabbit ears,rabbit girl,rabbit tail,playboy bunny"
  },
  {
    "group": "日常服装",
    "name": "反向兔女郎",
    "prompt": "safe,reverse bunnysuit,navel,pasties,wrist cuffs,bowtie,bunny_tail,fishnet_stockings,bunny_leotard,cuffs,rabbit ears,rabbit girl,rabbit tail,playboy bunny,x_shaped_black_pasties"
  },
  {
    "group": "日常服装",
    "name": "狼娘",
    "prompt": "wolf_ears,wolf_tail,paw_gloves,paw_boots,fur_cloak,fangs,leather_belt"
  },
  {
    "group": "日常服装",
    "name": "狗娘",
    "prompt": "dog_ears,dog_tail,paw_gloves,paw_boots,collar,bone_accessory,playful_pose"
  },
  {
    "group": "日常服装",
    "name": "鹿娘",
    "prompt": "deer_antlers,deer_tail,paw_gloves,hoof_boots,leaf_crown,forest_dress"
  },
  {
    "group": "日常休闲穿搭",
    "name": "复古水洗帽衫与老妈裤",
    "prompt": "vintage washed hoodie,faded print,high waist mom jeans,distressed denim,suede ankle boots,thick knit socks,silver pendant necklace,retro aesthetic"
  },
  {
    "group": "日常休闲穿搭",
    "name": "敞开拉链帽衫与运动内衣",
    "prompt": "oversized zip hoodie,open front,black sports bra visible,compression leggings,shiny fabric,platform running shoes,nylon gym bag,athletic style,high contrast"
  },
  {
    "group": "日常休闲穿搭",
    "name": "黑色修身帽衫与皮裤",
    "prompt": "black fitted hoodie,structured fit,leather look leggings,tight pants,sleek black ankle boots,square sunglasses,simple gold chain,minimalist chic,urban"
  },
  {
    "group": "日常休闲穿搭",
    "name": "浅紫帽衫与格子裙",
    "prompt": "lavender oversized hoodie,micro pleated tennis skirt,white knee high socks,checkerboard slip-on shoes,small backpack,pastel skater,playful"
  },
  {
    "group": "日常休闲穿搭",
    "name": "深绿帽衫叠穿与西裤",
    "prompt": "dark green hoodie,collared shirt layered underneath,charcoal grey pleated trousers,straight fit,leather tassel loafers,gold rim glasses,dark academia"
  },
  {
    "group": "日常休闲穿搭",
    "name": "奶油羊羔绒帽衫与针织裤",
    "prompt": "cream sherpa hoodie,fuzzy texture,teddy fabric,wide leg knit pants,cozy slippers,hot beverage mug,soft focus,loungewear,intimate"
  },
  {
    "group": "日常休闲穿搭",
    "name": "霓虹短帽衫与工装慢跑裤",
    "prompt": "neon yellow crop hoodie,fluorescent color,black cargo joggers,reflective stripe,chunky platform sneakers,tinted visor cap,cyberpunk street,night light"
  },
  {
    "group": "日常休闲穿搭",
    "name": "黑色短帽衫与破洞牛仔",
    "prompt": "black cropped hoodie,plaid flannel shirt tied around waist,ripped skinny jeans,knee cutouts,combat boots,spiked choker,grunge aesthetic,punk style"
  },
  {
    "group": "日常休闲穿搭",
    "name": "白帽衫下衣失踪与长袜",
    "prompt": "oversized white hoodie,no pants, look,black thigh high stockings,high top converse sneakers,backward baseball cap,sporty ,zettai ryouiki"
  },
  {
    "group": "日常休闲穿搭",
    "name": "灰帽衫套T恤与渔网袜",
    "prompt": "grey oversized hoodie,layered over band graphic tee,denim mini skirt,fishnet tights,black platform boots,fingerless gloves,grunge look,festival outfit"
  },
  {
    "group": "日常休闲穿搭",
    "name": "蓝卫衣裙系带与长开衫",
    "prompt": "navy blue hoodie dress,belted waist,cinched,leather ankle boots,long knit cardigan over shoulders,gold hoop earrings,casual chic,autumn tones"
  },
  {
    "group": "日常休闲穿搭",
    "name": "丝绒短帽衫与低腰裤",
    "prompt": "baby pink velour zip hoodie,cropped,low rise velour sweatpants,rhinestone belt,platform sneakers,butterfly hair clips,y2k aesthetic,early 2000s"
  },
  {
    "group": "学院风穿搭",
    "name": "海军蓝开衫与格纹裙",
    "prompt": "navy blue fitted cardigan,crisp white oxford shirt,red and navy plaid pleated skirt,glossy black leather loafers,preppy style,collegiate"
  },
  {
    "group": "学院风穿搭",
    "name": "米色针织马甲与卡其裤",
    "prompt": "beige knit sweater vest,light blue button-down shirt,straight khaki chino pants,white canvas sneakers,layered look,neat aesthetic"
  },
  {
    "group": "学院风穿搭",
    "name": "灰色帽衫与中长牛仔裙",
    "prompt": "heather grey oversized hoodie,layered look,plaid wool scarf,midi denim skirt,a-line,black mary jane flats,soft grunge,messy bun"
  },
  {
    "group": "学院风穿搭",
    "name": "菱格纹毛衣与及膝袜",
    "prompt": "argyle knit sweater,v-neck,navy pleated micro skirt,white knee high socks,brown tassel loafers,classic academia,library background"
  },
  {
    "group": "学院风穿搭",
    "name": "白毛衣与丝带领结",
    "prompt": "white crewneck sweater,chunky knit,black ribbon tie,check mini skirt,red and black plaid,leather ballet flats,cute,feminine"
  },
  {
    "group": "学院风穿搭",
    "name": "驼色宽松西装与高领衫",
    "prompt": "camel oversized blazer,wool blend,white turtleneck sweater,dark wash slim fit jeans,leather oxford shoes,sophisticated layering,autumn"
  },
  {
    "group": "学院风穿搭",
    "name": "海军蓝背心与条纹衬衫",
    "prompt": "navy knit vest,striped button-down shirt,crisp collar,grey pleated skirt,a-line,white canvas low tops,casual campus style"
  },
  {
    "group": "学院风穿搭",
    "name": "黑色宽松开衫与毛呢裙",
    "prompt": "black loose cardigan,wool texture,collared blouse underneath,brown wool midi skirt,black leather ankle boots,dark academia,soft lighting"
  },
  {
    "group": "学院风穿搭",
    "name": "墨绿针织衫与红色格裙",
    "prompt": "dark green soft sweater,red tartan plaid mini skirt,round gold-rimmed glasses,white mary janes,cozy academic,vintage aesthetic"
  },
  {
    "group": "学院风穿搭",
    "name": "白色麻花毛衣与海军裙",
    "prompt": "white cable knit sweater,chunky texture,navy pleated skirt,black velvet headband,patent leather loafers,elegant preppy"
  },
  {
    "group": "学院风穿搭",
    "name": "浅棕短风衣与格纹裤",
    "prompt": "tan short trench coat,buttoned,cream wool sweater,plaid trousers,slim fit,leather derby shoes,commuting style,neat"
  },
  {
    "group": "学院风穿搭",
    "name": "酒红开衫与牛仔A字裙",
    "prompt": "burgundy knit cardigan,denim a-line skirt,light wash,canvas tote bag,simple white sneakers,weekend outfit,casual comfortable"
  },
  {
    "group": "夏季清爽类",
    "name": "白背心与牛仔短裤",
    "prompt": "white tank top fitted,ribbed cotton,light blue denim shorts,high waist,white canvas sneakers,denim bucket hat,clean aesthetic,summer sunlight"
  },
  {
    "group": "夏季清爽类",
    "name": "浅黄短T与亚麻裤",
    "prompt": "pastel yellow crop tee,midriff,high waist linen shorts,flowy fabric,flip flops,round retro sunglasses,beach background,soft lighting"
  },
  {
    "group": "夏季清爽类",
    "name": "天蓝T恤与米棉短裤",
    "prompt": "sky blue loose tee,relaxed fit,beige cotton shorts,cuffed hem,slide sandals,canvas tote bag,simple style,casual day out"
  },
  {
    "group": "夏季清爽类",
    "name": "条纹T恤与白褶裙",
    "prompt": "navy striped t-shirt,horizontal stripes,white pleated skirt,knee length,low top sneakers,red baseball cap,preppy style,collegiate"
  },
  {
    "group": "夏季清爽类",
    "name": "薄荷无袖与窄墨镜",
    "prompt": "mint green sleeveless top,light wash denim skirt,a-line,leather sandals,slim sunglasses,minimal jewelry,urban summer"
  },
  {
    "group": "夏季清爽类",
    "name": "桃色T恤与运动短裤",
    "prompt": "peach color t-shirt,relaxed fit,grey jogger shorts,fleece fabric,running shoes,sun visor hat,sporty athleisure"
  },
  {
    "group": "夏季清爽类",
    "name": "薰衣草绑带上衣",
    "prompt": "lavender tie front top,cropped,white cotton shorts,espadrille sandals,rope sole,crescent shoulder bag,feminine pastel"
  },
  {
    "group": "夏季清爽类",
    "name": "亚麻衬衫与卡其短裤",
    "prompt": "white linen shirt,loose fit,khaki shorts,cuffed,brown leather sandals,aviator sunglasses,resort wear"
  },
  {
    "group": "夏季清爽类",
    "name": "珊瑚背心与牛仔热裤",
    "prompt": "coral soft tank top,ribbed knit,denim cutoffs,frayed hem,slide sandals,braided bracelet,bohemian casual"
  },
  {
    "group": "夏季清爽类",
    "name": "浅灰T恤与米色棉裙",
    "prompt": "light grey tee oversized,beige cotton midi skirt,a-line,canvas sneakers,white bucket hat,soft light"
  },
  {
    "group": "夏季清爽类",
    "name": "淡绿T恤与阔腿短裤",
    "prompt": "pastel green tee,simple,white wide leg shorts,velcro sandals,sport sunglasses,active casual"
  },
  {
    "group": "夏季清爽类",
    "name": "无袖衬衫与海军A字裙",
    "prompt": "sleeveless white blouse,navy a-line skirt,knee length,slip-on sneakers,straw hat,elegant summer"
  },
  {
    "group": "运动风",
    "name": "极简黑运动套装",
    "prompt": "black sports bra,racerback,high waist running shorts,spandex,white running shoes,hair tie wrist,gym lighting,fitness model"
  },
  {
    "group": "运动风",
    "name": "白背心与海军紧身裤",
    "prompt": "white athletic tank,navy compression leggings,trainers,sweatband,athletic body,high intensity"
  },
  {
    "group": "运动风",
    "name": "灰色速干T恤套装",
    "prompt": "grey dry fit tee,quick drying,black jogger pants,tapered cuff,running shoes,black baseball cap,cardio"
  },
  {
    "group": "运动风",
    "name": "蓝色工字背心与骑行裤",
    "prompt": "blue racerback tank,black biker shorts,spandex,lightweight sneakers,wristband,cycling"
  },
  {
    "group": "运动风",
    "name": "白宽松卫衣与高筒袜",
    "prompt": "oversized white hoodie,track shorts,high white socks,tennis shoes,sporty chic,warm up"
  },
  {
    "group": "运动风",
    "name": "红色训练T与运动凉鞋",
    "prompt": "red training tee,elastic shorts grey,sport sandals,headband,bright colors,outdoor workout"
  },
  {
    "group": "运动风",
    "name": "黑色拉链运动套装",
    "prompt": "black zip track jacket,matching track pants,full tracksuit,running shoes,sport sunglasses,street athleisure"
  },
  {
    "group": "运动风",
    "name": "霓虹绿网眼背心",
    "prompt": "neon green tank top,mesh shorts black,cross trainers,arm sweatband,high energy"
  },
  {
    "group": "运动风",
    "name": "白色网球POLO裙套装",
    "prompt": "white tennis polo,pleated sport skirt,court shoes,tennis visor,elegant sportswear"
  },
  {
    "group": "运动风",
    "name": "炭灰轻薄帽衫与瑜伽裤",
    "prompt": "charcoal hoodie lightweight,navy yoga leggings,gym sneakers,canvas tote bag,post-workout"
  },
  {
    "group": "运动风",
    "name": "海军压缩衣与水袋腰带",
    "prompt": "navy compression top,tight fit shorts,spandex,running shoes,hydration belt,high intensity"
  },
  {
    "group": "运动风",
    "name": "浅粉运动T与七分裤",
    "prompt": "pastel pink athletic tee,grey capri leggings,cropped,slip-on sneakers,white baseball cap,soft athleisure"
  },
  {
    "group": "海边风",
    "name": "极简黑运动套装",
    "prompt": "black sports bra,racerback,high waist running shorts,spandex,white running shoes,hair tie wrist,gym lighting,fitness model"
  },
  {
    "group": "海边风",
    "name": "白背心与海军紧身裤",
    "prompt": "white athletic tank,navy compression leggings,trainers,sweatband,athletic body,high intensity"
  },
  {
    "group": "海边风",
    "name": "灰色速干T恤套装",
    "prompt": "grey dry fit tee,quick drying,black jogger pants,tapered cuff,running shoes,black baseball cap,cardio"
  },
  {
    "group": "海边风",
    "name": "蓝色工字背心与骑行裤",
    "prompt": "blue racerback tank,black biker shorts,spandex,lightweight sneakers,wristband,cycling"
  },
  {
    "group": "海边风",
    "name": "白宽松卫衣与高筒袜",
    "prompt": "oversized white hoodie,track shorts,high white socks,tennis shoes,sporty chic,warm up"
  },
  {
    "group": "海边风",
    "name": "红色训练T与运动凉鞋",
    "prompt": "red training tee,elastic shorts grey,sport sandals,headband,bright colors,outdoor workout"
  },
  {
    "group": "海边风",
    "name": "黑色拉链运动套装",
    "prompt": "black zip track jacket,matching track pants,full tracksuit,running shoes,sport sunglasses,street athleisure"
  },
  {
    "group": "海边风",
    "name": "霓虹绿网眼背心",
    "prompt": "neon green tank top,mesh shorts black,cross trainers,arm sweatband,high energy"
  },
  {
    "group": "海边风",
    "name": "白色网球POLO裙套装",
    "prompt": "white tennis polo,pleated sport skirt,court shoes,tennis visor,elegant sportswear"
  },
  {
    "group": "海边风",
    "name": "炭灰轻薄帽衫与瑜伽裤",
    "prompt": "charcoal hoodie lightweight,navy yoga leggings,gym sneakers,canvas tote bag,post-workout"
  },
  {
    "group": "海边风",
    "name": "海军压缩衣与水袋腰带",
    "prompt": "navy compression top,tight fit shorts,spandex,running shoes,hydration belt,high intensity"
  },
  {
    "group": "海边风",
    "name": "浅粉运动T与七分裤",
    "prompt": "pastel pink athletic tee,grey capri leggings,cropped,slip-on sneakers,white baseball cap,soft athleisure"
  },
  {
    "group": "秋冬穿搭类",
    "name": "米色长款大衣与高领衫",
    "prompt": "beige wool coat,longline,white turtleneck sweater,dark straight jeans,black ankle boots,winter elegance,cold"
  },
  {
    "group": "秋冬穿搭类",
    "name": "海军羽绒服与束脚裤",
    "prompt": "navy puffer jacket,glossy nylon,grey knit sweater,black jogger pants,winter sneakers,cozy street"
  },
  {
    "group": "秋冬穿搭类",
    "name": "棕色灯芯绒与格纹围巾",
    "prompt": "brown corduroy jacket,texture detail,red plaid wool scarf,blue denim jeans,loafer boots,autumn aesthetic"
  },
  {
    "group": "秋冬穿搭类",
    "name": "炭灰西装与中长褶裙",
    "prompt": "charcoal wool blazer,tailored,black turtleneck,midi pleated skirt,heeled boots,dark academia"
  },
  {
    "group": "秋冬穿搭类",
    "name": "燕麦色宽松毛衣套装",
    "prompt": "oatmeal oversized sweater,chunky knit,cream corduroy pants,canvas sneakers,knit beanie,cozy texture"
  },
  {
    "group": "秋冬穿搭类",
    "name": "橄榄派克大衣与登山靴",
    "prompt": "olive parka coat,detachable hood,quilted vest brown,white thermal shirt,heavy hiking boots,wilderness"
  },
  {
    "group": "秋冬穿搭类",
    "name": "黑色修身大衣与皮靴",
    "prompt": "black wool overcoat,fitted,grey sweater,tapered trousers,leather boots,minimal style,elegant"
  },
  {
    "group": "秋冬穿搭类",
    "name": "驼色高领衫与格纹裙",
    "prompt": "camel turtleneck sweater,thick knit,plaid wool skirt,black opaque tights,chelsea boots,classic autumn"
  },
  {
    "group": "秋冬穿搭类",
    "name": "森绿厚帽衫与羽绒背心",
    "prompt": "forest green thick hoodie,fleece,black puffer vest,tapered jeans,winter sneakers,outdoor style"
  },
  {
    "group": "秋冬穿搭类",
    "name": "奶油抓绒与棕色阔腿裤",
    "prompt": "cream fleece jacket,sherpa texture,wide leg pants brown,grey knit beanie,slip-on sneakers,casual comfort"
  },
  {
    "group": "秋冬穿搭类",
    "name": "灰色冬季风衣与踝靴",
    "prompt": "grey trench coat,winter weight,turtleneck charcoal,slim trousers,ankle boots,urban commute"
  },
  {
    "group": "秋冬穿搭类",
    "name": "海军粗呢大衣与短裤",
    "prompt": "navy duffle coat,toggle closures,striped knit sweater,wool shorts,opaque tights,platform boots,preppy winter"
  },
  {
    "group": "秋冬穿搭类",
    "name": "酒红毛衣与棉服叠穿",
    "prompt": "deep burgundy sweater,padded jacket beige,cord pants brown,suede boots,layered cold weather"
  },
  {
    "group": "秋冬穿搭类",
    "name": "白色羊羔绒与绗缝裙",
    "prompt": "white sherpa hoodie,quilted skirt black,thick leggings,ankle snow boots,cozy winter"
  },
  {
    "group": "秋冬穿搭类",
    "name": "深绿羊毛大衣与德比靴",
    "prompt": "dark green wool coat,cream knit sweater,straight pants grey,derby boots,structured style"
  },
  {
    "group": "秋冬穿搭类",
    "name": "棕色长棉服与帽衫",
    "prompt": "brown padded long coat,beige hoodie,jogger pants grey,winter trainers,mixed layering"
  },
  {
    "group": "秋冬穿搭类",
    "name": "黑色抓绒与户外运动鞋",
    "prompt": "black fleece pullover,thermal leggings,quilted jacket navy,hiking sneakers,outdoor active"
  },
  {
    "group": "秋冬穿搭类",
    "name": "灰色羊毛高领与格纹裤",
    "prompt": "grey wool turtleneck,plaid wool trousers,leather sneakers white,long scarf,winter texture"
  },
  {
    "group": "秋冬穿搭类",
    "name": "驼色大衣与棕色针织背心",
    "prompt": "camel coat mid-length,knitted vest brown,white shirt,straight jeans,chelsea boots,timeless style"
  },
  {
    "group": "秋冬穿搭类",
    "name": "浅棕仿皮草与针织裙",
    "prompt": "tan faux fur jacket,knit dress beige,thermal tights,winter boots,glamorous winter"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "白长袖与黑直筒裤",
    "prompt": "white long sleeve tee,crisp cotton,straight black trousers,tailored,minimalist sneakers,canvas tote bag,simple silhouette,clean aesthetic"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "米色针织与奶油阔腿",
    "prompt": "beige knit sweater,soft cashmere blend,cream wide leg pants,flowy,slip-on shoes,small shoulder bag,cozy minimalist,diffused light"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "炭灰高领与皮乐福",
    "prompt": "charcoal turtleneck,slim fit,fine knit,grey tailored pants,leather loafers,simple watch,sophisticated minimal"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "黑西装与基础白T",
    "prompt": "black oversized blazer,wool blend,basic white tee,straight light wash jeans,clean white sneakers,contrast fit"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "燕麦开衫与穆勒鞋",
    "prompt": "oatmeal cardigan,lightweight wool,ribbed tank top underneath,beige trousers,high waist,flat mules,autumn cozy"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "软灰卫衣与锥形裤",
    "prompt": "soft grey sweatshirt,heather grey,boxy fit,tapered cream pants,canvas sneakers white,small crossbody bag,casual comfort"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "黑半高领与长褶裙",
    "prompt": "black mock neck top,long pleated skirt beige,flowy midi,minimal sandals,round glasses,elegant simple"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "亚麻衬衫与深色阔腿",
    "prompt": "white linen shirt,relaxed fit,dark wide leg pants,breathable fabric,slip sandals,simple silver necklace,summer minimalist"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "灰褐毛衣与黑色中裙",
    "prompt": "taupe sweater,loose knit,midi skirt black,a-line,simple leather loafers,leather shoulder bag,autumn minimal"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "黑色盒型T与褶皱裤",
    "prompt": "black tee boxy,heavyweight cotton,pleated trousers grey,minimalist sneakers,black baseball cap,structured casual"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "米白帽衫与灰色卫裤",
    "prompt": "ivory hoodie,clean finish,grey wide sweatpants,fleece,light dad sneakers,large canvas tote,relaxed streetwear"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "深棕针织与奶油直筒裤",
    "prompt": "dark brown knit top,fine wool,cream straight pants,tailored,flat sandals,light scarf,elegant simple"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "利落衬衫与黑中裙",
    "prompt": "white button shirt crisp,sharp collar,black midi skirt,knee length,ballet flats,structured leather bag,classic professional"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "暗绿T与海军宽松裤",
    "prompt": "muted green tee,relaxed fit,navy relaxed trousers,clean slip-on shoes,simple bracelet,casual day out"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "米色卫衣与白色棉裙",
    "prompt": "beige sweatshirt plain,oversized,white cotton skirt,a-line,simple sneakers,cotton tote bag,soft summer"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "深灰开衫与罗纹裙",
    "prompt": "dark grey cardigan,thick rib knit dress black,midi length,low sandals,slim leather bag,monochrome layering"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "白毛衣与灰褐九分裤",
    "prompt": "white crewneck sweater,chunky knit,taupe cropped pants,high waist,beige loafers,gold minimal necklace,autumn preppy"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "黑背心与奶油阔腿裤",
    "prompt": "black tank top clean,cream wide leg trousers,simple sandals,round sunglasses,high contrast,vacation minimal"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "柔米长外套与低跟靴",
    "prompt": "soft beige long coat,light wool blend,light knit top,slim trousers black,low heel boots,elegant commute"
  },
  {
    "group": "极简风 / 氛围风",
    "name": "灰宽松T与黑色飘逸裤",
    "prompt": "grey oversized tee,black flowy pants,viscose fabric,canvas sneakers,folded tote bag,effortless casual"
  },
  {
    "group": "复古类",
    "name": "复古皮夹克与直筒牛仔",
    "prompt": "brown leather jacket vintage,worn leather texture,white tee classic,straight blue jeans,retro sneakers,70s aesthetic"
  },
  {
    "group": "复古类",
    "name": "海军棒球夹克与条纹衫",
    "prompt": "navy varsity jacket,striped knit sweater,khaki chinos,slim fit,canvas sneakers,collegiate retro"
  },
  {
    "group": "复古类",
    "name": "米色高领与格纹短裙",
    "prompt": "beige turtleneck knit,fine wool,plaid wool skirt,mini length,black opaque tights,loafer heels,academic retro"
  },
  {
    "group": "复古类",
    "name": "宽松牛仔与乐队T恤",
    "prompt": "oversized denim jacket,band graphic tee,black faded jeans,ripped denim,black combat boots,grunge retro"
  },
  {
    "group": "复古类",
    "name": "深棕复古西装与牛津鞋",
    "prompt": "dark brown blazer retro,tweed texture,cream blouse,straight trousers,oxford shoes,vintage professional"
  },
  {
    "group": "复古类",
    "name": "芥黄针织与灯芯绒裤",
    "prompt": "mustard knit sweater,thick texture,brown corduroy pants,round glasses,leather loafers,70s intellectual"
  },
  {
    "group": "复古类",
    "name": "橄榄军装夹克与老洗牛仔",
    "prompt": "olive military jacket,vintage wash jeans,white sneakers,canvas tote,safari style"
  },
  {
    "group": "复古类",
    "name": "奶油蕾丝衫与玛丽珍",
    "prompt": "cream lace blouse,victorian style,midi a-line skirt brown,mary jane shoes,ribbon hair clip,soft retro"
  },
  {
    "group": "复古类",
    "name": "复古条纹T与高腰短裤",
    "prompt": "striped retro tee,high waist denim shorts,flat sneakers,dad cap,90s casual"
  },
  {
    "group": "复古类",
    "name": "酒红复古开衫与阔腿裤",
    "prompt": "burgundy cardigan vintage,button shirt white,wide trousers grey,leather loafers,academic casual"
  },
  {
    "group": "复古类",
    "name": "70年代麂皮与喇叭裤",
    "prompt": "70s brown suede jacket,fitted,turtleneck slim,flare jeans,heeled boots,disco era"
  },
  {
    "group": "复古类",
    "name": "菱格纹复古马甲",
    "prompt": "argyle knit vest retro,beige shirt,navy pleated skirt,oxford flats,dark academia"
  },
  {
    "group": "复古类",
    "name": "90年代防风与宽松牛仔",
    "prompt": "90s windbreaker jacket,relaxed jeans light wash,retro sneakers,nylon bucket hat,hip hop retro"
  },
  {
    "group": "复古类",
    "name": "棕色花呢大衣与格纹裙",
    "prompt": "brown tweed coat,knit top cream,midi skirt plaid,black ankle boots,classic vintage"
  },
  {
    "group": "复古类",
    "name": "复古滚边T与中洗牛仔",
    "prompt": "white ringer tee retro,medium wash denim skirt,canvas high tops,striped tube socks,80s aesthetic"
  },
  {
    "group": "复古类",
    "name": "海军复古水手领",
    "prompt": "navy sailor collar top vintage,cream pleated skirt,mary janes,shoulder bag,maritime retro"
  },
  {
    "group": "复古类",
    "name": "摩卡开衫与印花丝巾",
    "prompt": "mocha cardigan,printed silk scarf,tapered trousers,leather loafers,elegant vintage"
  },
  {
    "group": "复古类",
    "name": "橄榄针织POLO与直筒裤",
    "prompt": "olive knit polo,straight beige pants,brown belt,classic sneakers,preppy retro"
  },
  {
    "group": "复古类",
    "name": "复古牛仔马甲叠穿",
    "prompt": "denim vest retro,plaid shirt layered,black jeans,work boots,rugged vintage"
  },
  {
    "group": "复古类",
    "name": "奶油渔夫毛衣与短裤",
    "prompt": "cream fisher knit sweater,wool shorts brown,black opaque tights,chelsea boots,nordic vintage"
  },
  {
    "group": "居家放松类",
    "name": "软灰卫衣与棉质家居裤",
    "prompt": "soft grey sweatshirt,cotton lounge pants,fleece lining,cozy slippers,knit headband,intimate setting"
  },
  {
    "group": "居家放松类",
    "name": "米色卫衣与奶油抓绒裤",
    "prompt": "beige oversized hoodie,sherpa fleece shorts cream,warm fuzzy socks,canvas tote,comfort wear"
  },
  {
    "group": "居家放松类",
    "name": "燕麦毛衣与罗纹打底裤",
    "prompt": "oatmeal knit sweater,ribbed leggings,plush fluffy slippers,decorative hair clip,bedroom setting"
  },
  {
    "group": "居家放松类",
    "name": "白长袖与灰色宽松短裤",
    "prompt": "white long sleeve tee,loose lounge shorts grey,house slippers,simple bracelet,relaxing at home"
  },
  {
    "group": "居家放松类",
    "name": "浅粉卫衣与奶油棉裤",
    "prompt": "pastel pink sweatshirt,fleece fabric,cotton pants relaxed,warm socks cream,soft blanket,nap time"
  },
  {
    "group": "居家放松类",
    "name": "海军开衫与棉质短裤",
    "prompt": "navy cardigan soft,ribbed tank top white,jersey shorts,slip-on sandals,breathable loungewear"
  },
  {
    "group": "居家放松类",
    "name": "炭灰薄帽衫与绒面拖鞋",
    "prompt": "charcoal hoodie lightweight,jogger pants beige,tapered cuff,plush slippers,scrunchie,home office"
  },
  {
    "group": "居家放松类",
    "name": "奶油抓绒套头衫",
    "prompt": "cream fleece pullover,teddy texture,lounge pants grey,knit socks,small pillow,cozy texture"
  },
  {
    "group": "居家放松类",
    "name": "薄荷T与条纹睡裤",
    "prompt": "mint cotton tee,soft pajama pants striped,slide sandals,hair ribbon,breathable nightwear"
  },
  {
    "group": "居家放松类",
    "name": "白色罗纹上衣与家居裙",
    "prompt": "white rib knit top,jersey skirt grey,fleece slippers,cozy shawl,intimate comfort"
  },
  {
    "group": "居家放松类",
    "name": "浅棕卫衣与毛巾拖鞋",
    "prompt": "light brown sweatshirt loose,matching sweat shorts,terry slippers,tote bag,relaxed casual"
  },
  {
    "group": "居家放松类",
    "name": "黑色休闲T与炭灰家居裤",
    "prompt": "black relaxed tee,wide lounge pants charcoal,house sandals,knit beanie,minimal loungewear"
  },
  {
    "group": "居家放松类",
    "name": "奶油柔软帽衫与白色束脚裤",
    "prompt": "cream hoodie soft,cotton joggers white,plush socks,eye mask,sleeping accessories"
  },
  {
    "group": "居家放松类",
    "name": "灰色华夫格与抽绳短裤",
    "prompt": "grey waffle knit top,drawstring shorts beige,linen slippers,scrunchie pastel,textured comfort"
  },
  {
    "group": "居家放松类",
    "name": "棕色开衫与保暖打底裤",
    "prompt": "brown knit cardigan,cotton tee inside,warm leggings,fuzzy slippers,autumn loungewear"
  },
  {
    "group": "居家放松类",
    "name": "浅蓝睡衣套装",
    "prompt": "light blue pajama shirt,pajama shorts matching,piping detail,home slippers,small pouch"
  },
  {
    "group": "居家放松类",
    "name": "炭灰抓绒外套与针织袜",
    "prompt": "charcoal fleece jacket,zip front,jersey pants soft,knit socks cream,warm scarf,layered home"
  },
  {
    "group": "居家放松类",
    "name": "米色罗纹家居套与披肩",
    "prompt": "beige rib lounge set,slide sandals,light blanket shawl,hair clip,seamless comfort"
  },
  {
    "group": "居家放松类",
    "name": "白色棉帽衫与薄荷短裤",
    "prompt": "white cotton hoodie,soft shorts mint,warm socks,plush pillow,playful loungewear"
  },
  {
    "group": "居家放松类",
    "name": "浅紫T恤与燕麦家居裤",
    "prompt": "pastel lavender tee,oatmeal lounge pants,fleece slippers,cozy cardigan,muted colors"
  },
  {
    "group": "户外类",
    "name": "橄榄防风与徒步裤",
    "prompt": "olive windbreaker jacket,nylon texture,hiking pants khaki,trail sneakers,bucket hat,outdoor gear"
  },
  {
    "group": "户外类",
    "name": "海军抓绒与徒步凉鞋",
    "prompt": "navy fleece jacket,sherpa texture,cargo shorts beige,utility pockets,trekking sandals,canvas backpack,layered outdoor"
  },
  {
    "group": "户外类",
    "name": "灰色软壳与徒步靴",
    "prompt": "grey softshell jacket,black jogger pants,tapered cuff,heavy hiking boots,knit beanie,technical wear"
  },
  {
    "group": "户外类",
    "name": "棕色机能马甲与工装裤",
    "prompt": "brown utility vest,multi-pocket,long sleeve tee cream,cargo trousers olive,trail shoes,tactical style"
  },
  {
    "group": "户外类",
    "name": "浅棕轻量派克服",
    "prompt": "tan parka light,water resistant,white thermal shirt,hiking leggings,low hiking shoes,minimalist outdoor"
  },
  {
    "group": "户外类",
    "name": "森绿帽衫与户外凉鞋",
    "prompt": "forest green hoodie,nylon shorts grey,outdoor sandals,sun cap,lightweight trail"
  },
  {
    "group": "户外类",
    "name": "黑色雨衣与防水靴",
    "prompt": "black rain jacket,quick dry pants navy,waterproof boots,backpack large,serious hiking"
  },
  {
    "group": "户外类",
    "name": "米色绗缝马甲与工装靴",
    "prompt": "beige quilted vest,flannel shirt,straight jeans dark,work boots,rugged outdoor"
  },
  {
    "group": "户外类",
    "name": "炭灰轻羽绒与徒步鞋",
    "prompt": "charcoal lightweight puffer,hiking trousers brown,trekking shoes,wool hat,mountain climbing"
  },
  {
    "group": "户外类",
    "name": "橄榄尼龙与越野跑鞋",
    "prompt": "olive nylon jacket,ripstop pants grey,trail runners,crossbody utility bag,techwear outdoor"
  },
  {
    "group": "户外类",
    "name": "沙色抓绒与徒步鞋",
    "prompt": "sand fleece pullover,jogger pants olive,slip-on hiking shoes,canvas cap,casual trail"
  },
  {
    "group": "户外类",
    "name": "海军套头防风衣与户外靴",
    "prompt": "navy anorak jacket,wool blend pants,outdoor boots,neck warmer,winter trail"
  },
  {
    "group": "户外类",
    "name": "灰褐色徒步衬衫",
    "prompt": "taupe hiking shirt,short sleeves,cargo shorts dark green,trail sandals,hydration pack,active gear"
  },
  {
    "group": "户外类",
    "name": "浅灰风衣与越野跑鞋",
    "prompt": "light grey windbreaker,stretch leggings black,running trail shoes,visor,minimalist active"
  },
  {
    "group": "户外类",
    "name": "卡其机能夹克与徒步靴",
    "prompt": "khaki utility jacket,thermal tee,nylon pants black,trekking boots,workwear outdoor"
  },
  {
    "group": "户外类",
    "name": "棕色抓绒与户外裙装",
    "prompt": "brown fleece jacket,hiking skirt black,leggings thick,outdoor sneakers,trail walking"
  },
  {
    "group": "户外类",
    "name": "深绿雨衣与涉水鞋",
    "prompt": "dark green raincoat,tech pants grey,water shoes,roll-top backpack,wet weather gear"
  },
  {
    "group": "户外类",
    "name": "米色探险衬衫与丛林帽",
    "prompt": "beige safari shirt,olive shorts,trail sneakers,boonie hat,exploration style"
  },
  {
    "group": "户外类",
    "name": "炭灰保暖背心与徒步鞋",
    "prompt": "charcoal insulated vest,hoodie black,tapered outdoor pants,hiking shoes,layered warmth"
  },
  {
    "group": "户外类",
    "name": "海军轻量夹克与户外训练鞋",
    "prompt": "navy lightweight jacket,wool top cream,stretch joggers,outdoor trainers,active commute"
  },
  {
    "group": "雨天类",
    "name": "海军长雨衣与黄雨靴",
    "prompt": "long navy waterproof coat,glossy finish,black waterproof pants,yellow rain boots,compact umbrella,rain drops on surface,wet street,dark sky"
  },
  {
    "group": "雨天类",
    "name": "橄榄防水夹克与涉水鞋",
    "prompt": "olive waterproof jacket,quick dry shorts grey,trail water shoes,bucket hat,light rain,wet foliage"
  },
  {
    "group": "雨天类",
    "name": "黄色经典雨衣与牛仔裤",
    "prompt": "yellow classic rain jacket,straight denim jeans,rubber boots,canvas tote bag,puddles,bright colors"
  },
  {
    "group": "雨天类",
    "name": "黑色冲锋衣与机能裤",
    "prompt": "black shell jacket,water resistant,tapered tech pants,waterproof sneakers,baseball cap,urban rain"
  },
  {
    "group": "雨天类",
    "name": "米色连帽雨衣与短雨靴",
    "prompt": "beige hooded raincoat,knit sweater light,black leggings,short ankle rain boots,diffused light"
  },
  {
    "group": "雨天类",
    "name": "炭灰风暴外套与阔腿裤",
    "prompt": "charcoal storm jacket,black lining,navy wide leg pants,slip-on water shoes,small pouch bag,heavy rain"
  },
  {
    "group": "雨天类",
    "name": "灰色防水派克与徒步靴",
    "prompt": "grey waterproof parka,wool blend pants,heavy hiking boots waterproof,knit beanie,cold weather gear"
  },
  {
    "group": "雨天类",
    "name": "浅蓝雨壳外套与工装裤",
    "prompt": "pastel blue rain shell,beige cargo pants,rain sneakers,soft scarf,gentle rain,urban"
  },
  {
    "group": "雨天类",
    "name": "黑色超轻雨披",
    "prompt": "black ultralight rain poncho,grey joggers,slip-resistant shoes,crossbody bag,minimal gear"
  },
  {
    "group": "雨天类",
    "name": "森绿防水大衣与橡胶靴",
    "prompt": "forest green waterproof coat,fleece top cream,straight trousers,rubber boots,rubber texture,dark forest"
  },
  {
    "group": "冬季雪地风",
    "name": "海军长雨衣与黄雨靴",
    "prompt": "long navy waterproof coat,glossy finish,black waterproof pants,yellow rain boots,compact umbrella,rain drops on surface,wet street,dark sky"
  },
  {
    "group": "冬季雪地风",
    "name": "橄榄防水夹克与涉水鞋",
    "prompt": "olive waterproof jacket,quick dry shorts grey,trail water shoes,bucket hat,light rain,wet foliage"
  },
  {
    "group": "冬季雪地风",
    "name": "黄色经典雨衣与牛仔裤",
    "prompt": "yellow classic rain jacket,straight denim jeans,rubber boots,canvas tote bag,puddles,bright colors"
  },
  {
    "group": "冬季雪地风",
    "name": "黑色冲锋衣与机能裤",
    "prompt": "black shell jacket,water resistant,tapered tech pants,waterproof sneakers,baseball cap,urban rain"
  },
  {
    "group": "冬季雪地风",
    "name": "米色连帽雨衣与短雨靴",
    "prompt": "beige hooded raincoat,knit sweater light,black leggings,short ankle rain boots,diffused light"
  },
  {
    "group": "冬季雪地风",
    "name": "炭灰风暴外套与阔腿裤",
    "prompt": "charcoal storm jacket,black lining,navy wide leg pants,slip-on water shoes,small pouch bag,heavy rain"
  },
  {
    "group": "冬季雪地风",
    "name": "灰色防水派克与徒步靴",
    "prompt": "grey waterproof parka,wool blend pants,heavy hiking boots waterproof,knit beanie,cold weather gear"
  },
  {
    "group": "冬季雪地风",
    "name": "浅蓝雨壳外套与工装裤",
    "prompt": "pastel blue rain shell,beige cargo pants,rain sneakers,soft scarf,gentle rain,urban"
  },
  {
    "group": "冬季雪地风",
    "name": "黑色超轻雨披",
    "prompt": "black ultralight rain poncho,grey joggers,slip-resistant shoes,crossbody bag,minimal gear"
  },
  {
    "group": "冬季雪地风",
    "name": "森绿防水大衣与橡胶靴",
    "prompt": "forest green waterproof coat,fleece top cream,straight trousers,rubber boots,rubber texture,dark forest"
  },
  {
    "group": "骑行风",
    "name": "黑色专业骑行服",
    "prompt": "black cycling jersey,tight fit,padded bike shorts,clip-in shoes,riding gloves,aerodynamic,road cycling"
  },
  {
    "group": "骑行风",
    "name": "荧光绿风衣与头盔",
    "prompt": "neon green windbreaker,compression leggings black,cycling sneakers,protective helmet,reflective gear"
  },
  {
    "group": "骑行风",
    "name": "海军修身骑行夹克",
    "prompt": "navy bike jacket slim,cargo leggings grey,utility pockets,slip-on bike shoes,sport sunglasses,casual cycling"
  },
  {
    "group": "骑行风",
    "name": "炭灰骑行长袖与锥形裤",
    "prompt": "charcoal long sleeve jersey,tapered bike pants,lightweight sneakers,cap under helmet,cycling cap,trail"
  },
  {
    "group": "骑行风",
    "name": "白色透气T与反光背心",
    "prompt": "white breathable tee,bike shorts navy,reflective vest,cycling shoes,high visibility,simple style"
  },
  {
    "group": "骑行风",
    "name": "橄榄软壳夹克与骑行裤",
    "prompt": "olive softshell jacket,black bike tights,trail shoes,riding cap,outdoor cycling"
  },
  {
    "group": "骑行风",
    "name": "灰色机能帽衫与束脚裤",
    "prompt": "grey tech hoodie,slim joggers black,hybrid bike shoes,short riding gloves,urban cycling"
  },
  {
    "group": "骑行风",
    "name": "红色风衣背心与长裤",
    "prompt": "red wind vest,long sleeve base layer,cycling pants black,white helmet,high visibility"
  },
  {
    "group": "骑行风",
    "name": "米色宽松骑行上衣",
    "prompt": "beige jersey loose,elastic shorts black,commuting sneakers,messenger bag,casual cycling"
  },
  {
    "group": "骑行风",
    "name": "海军防水骑行外套",
    "prompt": "navy waterproof cycling coat,thermal tights,slip-on cycling shoes,reflective cap,heavy rain gear"
  },
  {
    "group": "跑步清晨风",
    "name": "灰色轻薄跑步套装",
    "prompt": "grey running hoodie lightweight,dry fit,black running tights,trainers,running belt,dawn light,active"
  },
  {
    "group": "跑步清晨风",
    "name": "白色速干T恤与短裤",
    "prompt": "white dry fit tee,navy shorts,running shoes,sports watch,high energy,morning run"
  },
  {
    "group": "跑步清晨风",
    "name": "黑色保暖长袖与慢跑裤",
    "prompt": "black thermal long sleeve,grey jogger pants,slip-on runners,headband,warm up,urban setting"
  },
  {
    "group": "跑步清晨风",
    "name": "浅蓝轻风衣与紧身裤",
    "prompt": "pastel blue windbreaker light,running tights black,cushioned sneakers,baseball cap,early morning"
  },
  {
    "group": "跑步清晨风",
    "name": "炭灰跑步T与反光臂带",
    "prompt": "charcoal runner tee,olive shorts,running shoes,reflective armband,high visibility"
  },
  {
    "group": "跑步清晨风",
    "name": "米色抓绒与越野跑鞋",
    "prompt": "beige fleece pullover,black leggings,trail runners,knit beanie,cold weather running"
  },
  {
    "group": "跑步清晨风",
    "name": "红色跑步夹克与手套",
    "prompt": "red running jacket,navy tapered pants,road sneakers,running gloves,layered running gear"
  },
  {
    "group": "跑步清晨风",
    "name": "白色长袖跑步上衣",
    "prompt": "white long sleeve runner top,black shorts,lightweight sneakers,waist pouch,simple runner"
  },
  {
    "group": "跑步清晨风",
    "name": "薄荷透气T与跑步紧身裤",
    "prompt": "mint breathable tee,grey running leggings,clean sneakers,sports cap,fresh air"
  },
  {
    "group": "跑步清晨风",
    "name": "黑色轻风壳外套",
    "prompt": "black wind shell,running tights charcoal,stability runners,neck warmer,minimal cold gear"
  },
  {
    "group": "正式礼服类",
    "name": "黑色缎面中长礼服",
    "prompt": "black satin midi dress,bias cut,pointed high heels,small clutch bag,pearl drop earrings,elegant evening wear"
  },
  {
    "group": "正式礼服类",
    "name": "海军长款晚礼服",
    "prompt": "navy evening gown long,flowy skirt,strappy heels silver,crystal necklace,soft shawl,red carpet"
  },
  {
    "group": "正式礼服类",
    "name": "白色挺括衬衫正装",
    "prompt": "white dress shirt crisp,black tailored suit,sharp crease,leather oxford shoes,simple tie,classic formal"
  },
  {
    "group": "正式礼服类",
    "name": "香槟色缎面吊带礼服",
    "prompt": "champagne slip dress satin,cowl neck, heels,metallic clutch,dainty bracelet,sophisticated"
  },
  {
    "group": "正式礼服类",
    "name": "酒红天鹅绒礼服",
    "prompt": "burgundy velvet dress,midi length,ankle strap heels,gold earrings,classic clutch,rich texture"
  },
  {
    "group": "正式礼服类",
    "name": "炭灰修身西装现代",
    "prompt": "charcoal suit slim fit,white dress shirt,leather dress shoes brown,silk pocket square,modern formal"
  },
  {
    "group": "正式礼服类",
    "name": "祖母绿中长礼服",
    "prompt": "emerald green midi dress,block heels beige,drop earrings,shoulder clutch,festive elegance"
  },
  {
    "group": "正式礼服类",
    "name": "奶油色剪裁连体礼服",
    "prompt": "cream tailored jumpsuit,wide leg,pointed pumps,minimalist necklace,envelope bag,chic formal"
  },
  {
    "group": "正式礼服类",
    "name": "经典黑色燕尾服",
    "prompt": "black tuxedo classic,white bow tie shirt,patent leather shoes,cufflinks,formal menswear"
  },
  {
    "group": "正式礼服类",
    "name": "银色亮片长礼服",
    "prompt": "silver sequin gown,mermaid silhouette,metallic high heels,clutch glitter,long earrings,glamorous"
  },
  {
    "group": "正式礼服类",
    "name": "浅灰现代西装与乐福",
    "prompt": "light grey suit modern,slim fit,beige dress shirt,leather loafers,slim tie,sharp minimal"
  },
  {
    "group": "正式礼服类",
    "name": "海军缎面鸡尾酒礼服",
    "prompt": "navy satin cocktail dress,slingback heels,pearl necklace,mini clutch,semi-formal"
  },
  {
    "group": "正式礼服类",
    "name": "粉色雪纺礼服",
    "prompt": "pastel pink chiffon dress, sandals heeled,small purse,floral hairpin,soft feminine"
  },
  {
    "group": "正式礼服类",
    "name": "深绿西装与雕花皮鞋",
    "prompt": "dark green suit,white dress shirt,brogues brown,tie bar,classic menswear"
  },
  {
    "group": "正式礼服类",
    "name": "黑色单肩礼服",
    "prompt": "black one shoulder dress,high heels,geometric earrings,evening bag,sleek modern"
  },
  {
    "group": "正式礼服类",
    "name": "香槟蕾丝中长礼服",
    "prompt": "champagne lace midi dress,low heels,pearl hairpin,mini top handle bag,delicate formal"
  },
  {
    "group": "正式礼服类",
    "name": "酒红修身西装与黑衬衫",
    "prompt": "burgundy suit slim fit,black shirt,leather dress shoes black,metal watch,dark formal"
  },
  {
    "group": "正式礼服类",
    "name": "海军露肩长礼服",
    "prompt": "navy halter dress long,backless,metallic sandals,minimal clutch,silver earrings,evening wear"
  },
  {
    "group": "正式礼服类",
    "name": "白色绉纱简洁礼服",
    "prompt": "white crepe gown simple,strappy heels,soft shawl,pearl studs,elegant minimalist"
  },
  {
    "group": "正式礼服类",
    "name": "深灰三件套西装",
    "prompt": "dark grey three piece suit,vest visible,white shirt,leather oxford shoes,tie classic,formal menswear"
  },
  {
    "group": "甜美可爱风",
    "name": "浅粉针织毛衣与玛丽珍",
    "prompt": "pastel pink knit sweater,chunky knit,flowy white pleated skirt,patent mary jane shoes,ribbon hairband,soft lighting,cozy texture,cute"
  },
  {
    "group": "甜美可爱风",
    "name": "白色彼得潘领与格裙",
    "prompt": "white peter pan collar blouse,soft cotton,beige plaid skirt,pleated midi,leather ballet flats,small quilted shoulder bag,gentle look,preppy"
  },
  {
    "group": "甜美可爱风",
    "name": "薰衣草开衫与碎花裙",
    "prompt": "lavender soft cardigan,delicate knit,floral print midi dress,flowy,low block heels,pearl hair clip,soft focus,garden background,cottagecore"
  },
  {
    "group": "甜美可爱风",
    "name": "薄荷绿T恤与牛仔裙",
    "prompt": "mint green cute graphic tee,light wash denim skirt,a-line,white canvas sneakers,pastel hair tie,simple makeup,summer casual"
  },
  {
    "group": "甜美可爱风",
    "name": "奶油针织背心叠穿",
    "prompt": "cream knit vest,cable knit,layered over white long sleeve shirt,navy pleated skirt,school uniform style,mary janes,preppy"
  },
  {
    "group": "甜美可爱风",
    "name": "浅黄卫衣与宽棉裤",
    "prompt": "pastel yellow sweatshirt,loose fit,wide cream cotton pants,baggy,chunky white sneakers,cute character tote bag,cozy streetwear"
  },
  {
    "group": "甜美可爱风",
    "name": "软粉帽衫与心形夹",
    "prompt": "soft pink hoodie,oversized,denim shorts,high waist,slip-on sneakers,casual,heart shaped hairpin,playful pose,youthful"
  },
  {
    "group": "甜美可爱风",
    "name": "天蓝泡泡袖与小猫跟",
    "prompt": "sky blue blouse,voluminous puff sleeves,white a-line skirt,knee length,kitten heels,low heels,ribbon handle bag,feminine,elegant"
  },
  {
    "group": "甜美可爱风",
    "name": "米色开衫与格纹裙",
    "prompt": "beige knit cardigan,button front,brown gingham skirt,subtle plaid,soft leather loafers,bow hair tie,gentle smile,neutral tones"
  },
  {
    "group": "甜美可爱风",
    "name": "淡绿色简约连衣裙",
    "prompt": "pastel green simple midi dress,flowy fabric,white flat sandals,pearl necklace,small shoulder purse,minimal jewelry,sun dress"
  },
  {
    "group": "甜美可爱风",
    "name": "白色蕾丝上衣与多层裙",
    "prompt": "white lace blouse,sheer sleeves,pink tiered ruffle skirt,layered skirt,ballet flats,floral hairband,romantic style,delicate"
  },
  {
    "group": "甜美可爱风",
    "name": "冰蓝短卫衣与短裤",
    "prompt": "ice blue cropped sweatshirt,midriff,beige cotton shorts,high waist,soft suede sneakers,mini nylon backpack,sporty pastel,comfy"
  },
  {
    "group": "甜美可爱风",
    "name": "奶油开衫与长百褶裙",
    "prompt": "cream knit cardigan,cute buttons,long pink pleated skirt,midi length,beige loafers,bow hair clip,sophisticated casual"
  },
  {
    "group": "甜美可爱风",
    "name": "浅紫T恤与牛仔背带裙",
    "prompt": "pastel purple t-shirt,denim overall dress,pinafore dress,white canvas sneakers,white headband,playful,casual day out"
  },
  {
    "group": "甜美可爱风",
    "name": "樱桃印花与伞裙",
    "prompt": "cherry print blouse,graphic print,white flare skirt,high waist,red kitten heels,small red leather bag,retro charm,pinup style"
  },
  {
    "group": "甜美可爱风",
    "name": "柠檬黄针织与碎花裙",
    "prompt": "lemon yellow knit top,fitted,blue floral midi skirt,a-line,white mary janes,small soft bracelet,simple,garden scene"
  },
  {
    "group": "甜美可爱风",
    "name": "粉色麻花毛衣与阔腿裤",
    "prompt": "pink cable knit sweater,chunky texture,cream wide leg pants,sneakers,teddy bear tote bag,fluffy texture,winter cozy"
  },
  {
    "group": "甜美可爱风",
    "name": "浅蓝开衫与格纹短裤",
    "prompt": "pastel blue knit cardigan,gingham shorts,high waist,flat sandals,mini ribbon bag,summer picnic,cute and comfortable"
  },
  {
    "group": "甜美可爱风",
    "name": "白色荷叶衬衫与百褶裙",
    "prompt": "white ruffle blouse,frills,pink pleated skirt,ballet flats,pearl hairband,romantic feminine style,light colors"
  },
  {
    "group": "甜美可爱风",
    "name": "浅紫可爱帽衫与牛仔裙",
    "prompt": "lavender cute graphic hoodie,denim skirt,a-line,white sneakers,pastel shoulder bag,everyday casual,looking over shoulder"
  },
  {
    "group": "辣妹街头风",
    "name": "灰卫衣与蕾丝内衣",
    "prompt": "oversized grey hoodie,heather grey,half-zip,unzipped,lace bralette peeking out,low rise baggy sweatpants,elastic waistband,white crew socks,messy bun,chill vibe"
  },
  {
    "group": "辣妹街头风",
    "name": "黑短卫衣与反戴帽",
    "prompt": "black cropped hoodie,drawstring tied,midriff,navel,micro denim shorts,frayed hem,distressed,baseball cap backwards,snapback,slide sandals,casual street"
  },
  {
    "group": "辣妹街头风",
    "name": "粉卫衣与鲸尾",
    "prompt": "pastel pink oversized hoodie,very long sleeves,visible thong straps,whale tail,exposed underwear,chunky platform sneakers,dad shoes,ankle socks,kawaii style"
  },
  {
    "group": "辣妹街头风",
    "name": "白卫衣与棉内裤",
    "prompt": "white hoodie,sleeves pushed up,forearm,high cut white cotton briefs,panties, look,reflective aviator sunglasses,barefoot,legs,sunlight"
  },
  {
    "group": "辣妹街头风",
    "name": "蓝卫衣裙与腿部手机",
    "prompt": "navy blue hoodie dress,mini length,thigh garter with phone pocket,sporty cat eye sunglasses,high top converse,sneakers,street fashion,cool attitude"
  },
  {
    "group": "辣妹街头风",
    "name": "扎染卫衣与毛拖鞋",
    "prompt": "tie dye cropped hoodie,colorful,midriff,cheeky boy shorts,round retro sunglasses,hippie glasses,fuzzy slippers,fluffy,playful pose"
  },
  {
    "group": "辣妹街头风",
    "name": "迷彩卫衣与缎面裙",
    "prompt": "camo hoodie,camouflage print,unzipped low,satin micro skirt,shiny fabric,mirrored sunglasses,reflection,platform sneakers,edgy"
  },
  {
    "group": "辣妹街头风",
    "name": "米色卫衣与方框镜",
    "prompt": "beige hoodie,half tucked,french tuck,thong straps visible on hips,whale tail,oversized square sunglasses,knee high socks,zettai ryouiki,fashion influencer"
  },
  {
    "group": "辣妹街头风",
    "name": "图案卫衣与运动镜",
    "prompt": "oversized graphic hoodie,band logo,micro pleated skirt,schoolgirl style,sporty wrap sunglasses,dad sneakers,chunky sole,walking"
  },
  {
    "group": "辣妹街头风",
    "name": "紫卫衣与心形镜",
    "prompt": "lavender hoodie,extra long sleeves,hiding hands,visible g-string,side straps,heart shaped sunglasses,lolita sunglasses,slide sandals,pastel goth"
  },
  {
    "group": "辣妹街头风",
    "name": "红卫衣与瑜伽裤",
    "prompt": "red super cropped hoodie,underboob,midriff,low rise yoga pants,leggings,tinted sunglasses,red lenses,white crew socks,sporty"
  },
  {
    "group": "辣妹街头风",
    "name": "条纹卫衣与牛仔短裤",
    "prompt": "striped hoodie,horizontal stripes,side zipper,micro denim cutoffs,jean shorts,gold aviator sunglasses,metal frame,ankle boots,leather boots"
  },
  {
    "group": "辣妹街头风",
    "name": "薄荷卫衣裙与人字拖",
    "prompt": "mint green hoodie dress,belted waist,cinched,cheeky panties peeking, angle,oversized round sunglasses,platform flip flops,summer vibe"
  },
  {
    "group": "辣妹街头风",
    "name": "炭灰卫衣与渔网袜",
    "prompt": "charcoal grey hoodie,unzipped,fishnet thigh highs,garter,rhinestone cat eye sunglasses,bling,chunky sneakers,grunge aesthetic,street style"
  },
  {
    "group": "辣妹街头风",
    "name": "浅蓝卫衣与缎面热裤",
    "prompt": "baby blue oversized hoodie,pastel,satin micro hotpants,shiny shorts,retro square sunglasses,70s style,fuzzy socks,soft texture"
  },
  {
    "group": "辣妹街头风",
    "name": "霓虹卫衣与工装短裤",
    "prompt": "neon green cropped hoodie,fluorescent,low rise cargo shorts,utility pockets,sporty shield sunglasses,cyberpunk visor,high socks,rave fashion"
  },
  {
    "group": "辣妹街头风",
    "name": "白卫衣与蕾丝短裤",
    "prompt": "white hoodie,sleeves rolled up,visible lace boyshorts,underwear,mirrored heart sunglasses,dad cap,baseball hat,tomboy style,sunlight"
  },
  {
    "group": "辣妹街头风",
    "name": "酒红卫衣裙与大腿袜",
    "prompt": "burgundy hoodie dress,mini length,thigh high stockings,absolute territory,oversized aviator sunglasses,platform sandals,open toe,autumn fashion"
  },
  {
    "group": "辣妹街头风",
    "name": "黑半拉卫衣与网球裙",
    "prompt": "black half-zip hoodie,zipper pull,micro pleated tennis skirt,white skirt,tinted oval sunglasses,small frame,crew socks,sporty chic,90s vibe"
  },
  {
    "group": "辣妹街头风",
    "name": "桃色卫衣与闪粉墨镜",
    "prompt": "peach oversized hoodie,soft color,cheeky cotton panties,round glitter sunglasses,sparkling,slide slippers,comfy,lounging"
  },
  {
    "group": "森系轻性感",
    "name": "医疗眼罩与病娇风",
    "prompt": "medical eyepatch,heart shape,syringe necklace,pastel nurse cap,torn stockings,bandages,yami kawaii,sick cute"
  },
  {
    "group": "森系轻性感",
    "name": "赛博面具与透明裙",
    "prompt": "cyber gas mask,neon tubes,clear vinyl skirt,circuit board print,futuristic visor,platform boots,cyber lolita,glowing"
  },
  {
    "group": "森系轻性感",
    "name": "哥特修女与乳胶",
    "prompt": "gothic nun veil,inverted cross,rosary beads,latex dress,holy water vial,sinner,gothic lolita,dark religious"
  },
  {
    "group": "森系轻性感",
    "name": "军帽与迷彩荷叶裙",
    "prompt": "military peaked cap,medals,epaulettes,camouflage ruffle skirt,combat boots,tactical vest,military lolita,uniform"
  },
  {
    "group": "森系轻性感",
    "name": "棺材包与吸血鬼",
    "prompt": "coffin shaped backpack,red velvet dress,vampire fangs,black lace choker,blood drip print,gothic lolita,dark romance"
  },
  {
    "group": "森系轻性感",
    "name": "血腥熊爪与粉色血",
    "prompt": "bloody bear claws,pink blood,bear ears headband,chains,heavy makeup,gloomy bear style,horror cute,gore"
  },
  {
    "group": "森系轻性感",
    "name": "破碎魔杖与暗黑魔法少女",
    "prompt": "broken magic wand,dark magical girl,corrupted soul gem,frilly dress,evil aura,glowing eyes,magical girl villain"
  },
  {
    "group": "森系轻性感",
    "name": "中华风洛丽塔与铆钉",
    "prompt": "qi lolita dress,chinese knots,bun covers,spiked choker,combat boots,high slit cheongsam,traditional mix"
  },
  {
    "group": "森系轻性感",
    "name": "蒸汽朋克护目镜与齿轮",
    "prompt": "steampunk goggles,brass gears,corset dress,brown leather,striped socks,clockwork accessories,neo victorian"
  },
  {
    "group": "森系轻性感",
    "name": "骷髅女仆与骨头夹",
    "prompt": "skeleton print maid apron,bone hair clip,torn fishnets,feather duster,skull makeup,horror maid,halloween"
  },
  {
    "group": "森系轻性感",
    "name": "马戏团领饰与小丑",
    "prompt": "circus ruff collar,diamond check print,jester hat,bells,tear drop makeup,creepy clown,dark circus"
  },
  {
    "group": "森系轻性感",
    "name": "全息裙与透明雨衣",
    "prompt": "holographic fabric dress,iridescent,transparent raincoat,pvc,knee high boots,futuristic fashion,techwear mix"
  },
  {
    "group": "森系轻性感",
    "name": "和风洛丽塔与武士刀",
    "prompt": "wa lolita kimono,corset belt,katana sword,japanese fan,fox mask,geta sandals with spikes,samurai style"
  },
  {
    "group": "森系轻性感",
    "name": "血腥绷带与点滴架",
    "prompt": "bloody bandages,wrapped arms,hospital gown remix,iv drip stand,pastel pills,pill accessories,menhera"
  },
  {
    "group": "森系轻性感",
    "name": "皮革束带与狗项圈",
    "prompt": "leather body harness,over frilly dress,spiked dog collar,handcuffs accessory,pastel ,sweet pain,soft grunge"
  },
  {
    "group": "森系轻性感",
    "name": "黑唇与倒十字",
    "prompt": "black lipstick,pale skin,inverted cross earrings,velvet cape,gothic lolita,cemetery background,bats"
  },
  {
    "group": "森系轻性感",
    "name": "别针发夹与乱马尾",
    "prompt": "safety pin hair clips,messy twin tails,oversized safety pins,plaid pleated skirt,punk rock,rebellious"
  },
  {
    "group": "森系轻性感",
    "name": "防毒面具与生化标志",
    "prompt": "gas mask with spikes,biohazard symbol,radioactive green,industrial dance,cyber goth,platform boots,dreadlocks"
  },
  {
    "group": "森系轻性感",
    "name": "眼球蝴蝶结与怪兽娘",
    "prompt": "eyeball bow,creepy cute,detached sleeves,striped arm warmers,monster girl,sharp teeth,horns"
  },
  {
    "group": "森系轻性感",
    "name": "铁丝项链与落魄公主",
    "prompt": "barbed wire necklace,silver wire,torn white dress,dirt smudges,grunge tiara,ruined princess,tragic"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "洛丽塔裙与朋克背心",
    "prompt": "lolita bell shaped skirt,layers of ruffles,torn plaid punk vest,distressed fabric,safety pins,spiked platform boots,chunky sole,mix media style"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "粉彩头饰与皮手套",
    "prompt": "pastel lace headbow,oversized bow,black leather fingerless gloves,studded gloves,safety pin choker,metal hardware,sweet punk,contrast style"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "甜美衬衫与霓虹裙",
    "prompt": "sweet ruffle blouse,peter pan collar,puffy sleeves,neon studded mini skirt,bright colors,combat ankle boots,leather boots,harajuku fashion"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "鸟笼裙与撕裂网衣",
    "prompt": "victorian style cage skirt,pannier,voluminous silhouette,ripped fishnet top,mesh layer,grunge aesthetic,silver chain belt,metal charms"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "涂鸦卫衣与外穿衬裙",
    "prompt": "white tulle petticoat,wearing petticoat as skirt,graffiti print cropped hoodie,street art style,thigh high stockings,garter straps,pastel goth"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "洛可可伞与漆皮热裤",
    "prompt": "elaborate rococo parasol,lace trim,ribbon decoration,shiny black vinyl hotpants,tight fit,lace gloves,elegant gothic, mix"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "瓷娃娃妆与铆钉护腕",
    "prompt": "porcelain doll makeup,pale skin,heavy blush,spiked wrist cuffs,leather cuffs,red tartan micro skirt,pleated skirt,visual kei"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "荷叶袜与霓虹发色",
    "prompt": "frilly ankle socks,lace trim,white socks,neon hair extensions,colorful streaks,edgy hairstyle,heavy metal collar,o-ring choker"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "哥特帽与乐队T恤",
    "prompt": "gothic lolita bonnet,black lace,roses,torn band t-shirt,graphic tee,distressed,platform mary janes,patent leather,casual lolita"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "棉花糖假发与乳胶",
    "prompt": "cotton candy colored wig,pink and blue gradient,fluffy hair,black latex bralette,shiny,heart buckle belt,cute ,pastel goth"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "蛋糕裙与铆钉皮衣",
    "prompt": "cupcake shaped skirt,tiered ruffles,studded black leather jacket,biker jacket, over shoulders,ribbon wrist ties,bow bracelets"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "天使翅膀与网眼臂套",
    "prompt": "white angel wing headpiece,feathers,ripped mesh arm warmers,fingerless,black chunky leather boots,yellow stitching,grunge fairy"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "草莓灯笼裤与别针耳环",
    "prompt": "strawberry print bloomers,pumpkin pants,frilly hem,neon safety pin earrings,punk jewelry,black combat boots,decora style"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "蕾丝领与铁链束带",
    "prompt": "white blouse with lace trimmed collar,black chain harness,body chain, style,pastel platform heels,chunky shoes,sweet punk"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "甜心围裙与束缚带",
    "prompt": "heart shaped apron,frilly,white apron,torn plaid straps,wrapping body,spiked tiara,princess punk,rebellious"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "喇叭袖与涂鸦夹克",
    "prompt": "bell sleeve dress,elegant,oversized graffiti bomber jacket,street art print,fishnet stockings,diamond net,urban lolita"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "荷叶边JSK与枪套",
    "prompt": "frilly jumperskirt,jsk,neon punk necktie,loose tie,leather thigh holster,weapon holster,tactical fashion,contrast style"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "粉彩双马尾与皮胸衣",
    "prompt": "pastel twin tails,pink hair,voluminous curls,black leather corset,peeking out,underbust corset,mary jane platforms,thick sole"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "荷叶披肩与破洞裤",
    "prompt": "lolita frilled capelet,shoulder cape,ripped denim shorts,distressed jeans,candy necklace,beaded choker,decora elements"
  },
  {
    "group": "甜酷朋克洛丽塔",
    "name": "复古手套与蝙蝠袖",
    "prompt": "vintage lace gloves,elegant,top with spiked bat wing sleeves,gothic silhouette,tartan mini skirt,plaid skirt,vampire aesthetic"
  },
  {
    "group": "运动健身风",
    "name": "全黑运动风",
    "prompt": "black cropped tank top,racerback,high waist black leggings,spandex texture,white running sneakers,high ponytail,sports watch,white ankle socks,gym background,fitness model"
  },
  {
    "group": "运动健身风",
    "name": "灰蓝搭配与反戴帽",
    "prompt": "grey racerback sports bra,navy blue compression leggings,shiny fabric,black baseball cap worn backwards,wireless earbuds,holding mesh gym bag,no show socks,athletic body"
  },
  {
    "group": "运动健身风",
    "name": "白灰瑜伽风",
    "prompt": "white fitted crop top,charcoal grey yoga pants,side stripes,rose gold sneakers,smartwatch,layered ponytail,white crew socks,stretching pose,pilates"
  },
  {
    "group": "运动健身风",
    "name": "薄荷绿清新风",
    "prompt": "mint green sports bra,strappy back,black high waist leggings,white dad hat,large bluetooth headphones,water bottle sling,cute bow ankle socks,outdoor jogging"
  },
  {
    "group": "运动健身风",
    "name": "深蓝长袖与灰杂色",
    "prompt": "navy blue long sleeve crop top,grey marl leggings,heather texture,black running shoes,fitness tracker,low bun,quarter socks,warm up,studio lighting"
  },
  {
    "group": "运动健身风",
    "name": "珊瑚色活力风",
    "prompt": "coral seamless tank top,black ankle length leggings,white platform sneakers,phone armband,messy high bun,no show socks,energetic vibe,cardio"
  },
  {
    "group": "运动健身风",
    "name": "网眼细节与橄榄绿",
    "prompt": "white mesh panel sports bra,olive green leggings,black baseball cap,holding resistance bands,side braid,striped crew socks,gym workout,fit body"
  },
  {
    "group": "运动健身风",
    "name": "拉链卫衣与蓝绿裤",
    "prompt": "black cropped zip hoodie,zipper down,high waist teal leggings,white training shoes,looking at phone,double ponytail,ankle socks,gym locker room"
  },
  {
    "group": "运动健身风",
    "name": "薰衣草紫与瑜伽",
    "prompt": "lavender push-up sports bra,charcoal capri leggings,cropped leggings,rose colored sneakers,carrying yoga mat,low ponytail,grey quarter socks,yoga studio"
  },
  {
    "group": "运动健身风",
    "name": "跑步装备全套",
    "prompt": "heather grey loose tank top,black high waist mesh leggings,see-through panels,black running cap,heart rate monitor strap,french braid,running pose"
  },
  {
    "group": "运动健身风",
    "name": "长款文胸与侧袋裤",
    "prompt": "white longline sports bra,crop top style,navy leggings with side pockets,white mesh sneakers,holding fitness journal,high bun,white crew socks,resting"
  },
  {
    "group": "运动健身风",
    "name": "蓝绿无缝T恤",
    "prompt": "teal seamless crop tee,tight fit,black ankle leggings,grey training shoes,side ponytail,black ankle socks,modern gym,soft lighting"
  },
  {
    "group": "运动健身风",
    "name": "复杂背带与跳绳",
    "prompt": "black strappy back bra,intricate straps,grey high waist leggings,white sneakers,holding jump rope,low bun with scrunchie,quarter socks,cardio"
  },
  {
    "group": "运动健身风",
    "name": "粉黑搭配与冥想",
    "prompt": "pink fitted crop top,black compression leggings,rose gold shoes,sitting cross legged,meditating,high ponytail with ribbon,no show socks,peace"
  },
  {
    "group": "运动健身风",
    "name": "喇叭瑜伽裤潮流",
    "prompt": "olive green racerback tank,charcoal flared yoga pants,bootcut,black platform sneakers,holding resistance loops,messy bun,olive crew socks"
  },
  {
    "group": "运动健身风",
    "name": "网眼长袖与智能戒指",
    "prompt": "white mesh crop long sleeve,sheer panels,navy high waist leggings,white training cap,smart ring,french braid crown,ankle socks,stretching"
  },
  {
    "group": "运动健身风",
    "name": "极简黑灰普拉提",
    "prompt": "black seamless sports bra,grey leggings with side stripe,white mesh shoes,holding yoga block,black quarter socks,pilates studio,bright window"
  },
  {
    "group": "运动健身风",
    "name": "长袖防晒与七分裤",
    "prompt": "coral long sleeve activewear,black capri leggings,rose platform sneakers,chest heart rate strap,high bun with clip,no show socks,runner"
  },
  {
    "group": "运动健身风",
    "name": "拉链文胸与荷兰辫",
    "prompt": "mint green zip-front sports bra,olive ankle leggings,white cap,double dutch braids,mint green crew socks,fitness influencer,selfie"
  },
  {
    "group": "运动健身风",
    "name": "夜跑发光鞋",
    "prompt": "navy blue fitted tank,black high waist leggings with pockets,phone in pocket,white glow-in-the-dark running shoes,ankle socks,night run,urban street"
  },
  {
    "group": "叛逆性感街头风",
    "name": "超大飞行夹克与工装裤",
    "prompt": "oversized bomber jacket,nylon texture,puffy jacket,micro crop top,underboob,baggy cargo pants,sagging pants,utility pockets,streetwear,hip hop style"
  },
  {
    "group": "叛逆性感街头风",
    "name": "破洞牛仔与蕾丝内衣",
    "prompt": "distressed denim jacket,ripped,shredded,open jacket,lace bralette,lingerie peeking,low waist joggers,sweatpants,elastic waistband,casual"
  },
  {
    "group": "叛逆性感街头风",
    "name": "涂鸦卫衣与渔网连体",
    "prompt": "graffiti hoodie,unzipped,colorful print,fishnet bodysuit,see-through,mesh layer,high top sneakers,basketball shoes,urban art style,vibrant"
  },
  {
    "group": "叛逆性感街头风",
    "name": "机车夹克与褶裙",
    "prompt": "black leather moto jacket,biker jacket,zipper details,micro pleated skirt,plaid skirt,combat boots,lace-up boots,punk rock,edgy fashion"
  },
  {
    "group": "叛逆性感街头风",
    "name": "迷彩风衣与丁字裤带",
    "prompt": "camo windbreaker,camouflage print,open jacket,satin thong straps,whale tail,visible underwear,dad hat,baseball cap,tomboy style,boyish"
  },
  {
    "group": "叛逆性感街头风",
    "name": "乐队T恤与破洞紧身裤",
    "prompt": "vintage band tee,distressed t-shirt,cropped top,midriff,metal chain belt,silver chain,ripped skinny jeans,knee cutout,grunge aesthetic,rock"
  },
  {
    "group": "叛逆性感街头风",
    "name": "霓虹运动外套与厚底鞋",
    "prompt": "neon track jacket,sportswear,mesh sports bra,gym clothes,platform sneakers,chunky sole,vibrant colors,athleisure,sporty chic,fitness"
  },
  {
    "group": "叛逆性感街头风",
    "name": "系腰法兰绒与骑行裤",
    "prompt": "plaid flannel shirt,tied around waist,knot,micro biker shorts,spandex shorts,tight fit,beanie,knit hat,skater girl style,street snap"
  },
  {
    "group": "叛逆性感街头风",
    "name": "乙烯基短风衣与厚底靴",
    "prompt": "short vinyl trench coat,glossy finish,pvc coat,lace socks,ruffled socks,chunky boots,platform boots,rainwear,gothic fashion,shiny"
  },
  {
    "group": "叛逆性感街头风",
    "name": "侧拉链卫衣与无指手套",
    "prompt": "streetwear hoodie,side zipper,hood up,cheeky denim cutoffs,short shorts,frayed hem,fingerless gloves,leather gloves,urban ninja,techwear"
  },
  {
    "group": "叛逆性感街头风",
    "name": "工装背心与透视背心",
    "prompt": "cargo vest,utility vest,multiple pockets,tactical gear,sheer tank top, visible,low top sneakers,skate shoes,vans style"
  },
  {
    "group": "叛逆性感街头风",
    "name": "人造毛夹克与乙烯基裙",
    "prompt": "faux fur cropped jacket,fluffy,fuzzy texture,vinyl mini skirt,shiny skirt,scrunchie on wrist,ponytail,90s fashion,glam street,chic"
  },
  {
    "group": "叛逆性感街头风",
    "name": "扎染大T恤与渔网裤",
    "prompt": "tie dye t-shirt,oversized,baggy,fishnet leggings,fishnet tights under shorts,slide sandals,socks and sandals,relaxed fit,hippie vibe"
  },
  {
    "group": "叛逆性感街头风",
    "name": "拼布牛仔与缎面文胸",
    "prompt": "patchwork denim jacket,multi-colored denim,reconstructed,satin bralette,lingerie top,high waist belt,cinched waist,fashion statement"
  },
  {
    "group": "叛逆性感街头风",
    "name": "反光背心与霓虹袜",
    "prompt": "reflective puffer vest,shiny down vest,3m reflective,micro hotpants,ultra short,neon socks,glowing socks,night street"
  },
  {
    "group": "叛逆性感街头风",
    "name": "迷彩卫衣与蕾丝项圈",
    "prompt": "street camo hoodie,camouflage print,lace choker,gothic accessory,ripped knee jeans,distressed denim,moody lighting,dark streetwear"
  },
  {
    "group": "叛逆性感街头风",
    "name": "网眼球衣与比基尼底",
    "prompt": "oversized mesh jersey,basketball jersey,see-through,cheeky bikini bottom,panties,bucket hat,fisher hat,street beach style,sporty"
  },
  {
    "group": "叛逆性感街头风",
    "name": "皮革背带与宽松卫裤",
    "prompt": "leather harness top,strappy, gear,baggy sweatpants,grey sweatpants,platform canvas shoes,high top sneakers,contrast style,kpop idol"
  },
  {
    "group": "叛逆性感街头风",
    "name": "涂鸦短裤与橄榄球衫",
    "prompt": "graffiti denim shorts,painted jeans,cropped rugby shirt,striped shirt,collar,chunky chain necklace,gold chain,street art,playful"
  },
  {
    "group": "叛逆性感街头风",
    "name": "防风运动服与发光乳贴",
    "prompt": "windbreaker tracksuit,matching set,jacket open,glowing pasties,nipple covers,peeking out,knee high socks,cyber fashion,futuristic"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "超大图T与骑行裤",
    "prompt": "oversized graphic tee,biker shorts black,white crew socks,slide sandals,bucket hat denim,tote bag canvas,messy bun"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "黑色胸衣与降落伞裤",
    "prompt": "black corset top,baggy parachute pants,chunky white sneakers,silver chain belt,slicked back bun,oval sunglasses"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "白抹胸与低腰牛仔",
    "prompt": "white tube top strapless,low rise straight leg jeans,black thong straps,platform flip flops,baguette bag,claw clip hair"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "网眼长袖与工装裙",
    "prompt": "mesh long sleeve crop,cargo mini skirt khaki,black combat boots,layered silver chains,half up half down,small shoulder bag"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "粉短开衫与袜套",
    "prompt": "baby pink cardigan cropped,white pleated tennis skirt,white leg warmers,chunky loafers,pearl necklace,high ponytail"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "皮西装叠穿帽衫",
    "prompt": "black leather blazer oversized,grey hoodie under,biker shorts,white dad sneakers,baseball cap,hoop earrings silver"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "扎染婴儿T与破洞裤",
    "prompt": "tie dye baby tee,baggy ripped jeans,converse high tops,colorful beaded necklace,space buns,backpack mini"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "白背心与牛仔长裙",
    "prompt": "white ribbed tank,denim maxi skirt slit,cowboy boots,western belt,messy braids,aviator sunglasses"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "霓虹网眼与工装裤",
    "prompt": "neon green mesh top,black bralette under,cargo joggers black,chunky boots,futuristic shades,high tight ponytail"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "条纹Polo与学院风",
    "prompt": "striped polo shirt cropped,pleated mini skirt navy,white knee socks,mary jane platforms,beret hat,tote bag"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "灰卫裤与AJ",
    "prompt": "grey marl sweatpants baggy,white baby tee,zip up hoodie open,jordan sneakers,headphone around neck,messy hair"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "黑挂脖与米色工装",
    "prompt": "black halter top,low rise cargo pants beige,chunky sandals,belly chain gold,beach waves hair,tote bag mesh"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "白衬衫敞穿与牛仔靴",
    "prompt": "white oversized shirt open,black crop top,denim shorts,cowboy boots white,western hat,layered rings"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "紫卫衣下衣失踪",
    "prompt": "lavender hoodie oversized,no pants look,white chunky sneakers,ribbed socks,hair clip pastel,crossbody bag"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "滚边T与背带裤",
    "prompt": "graphic ringer tee,denim overalls loose,one strap down,converse sneakers,bucket hat,pigtails"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "黑抹胸与超短裙",
    "prompt": "black tube top,low rise micro mini skirt,knee high boots black,leather jacket ,slicked back hair,silver hoops"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "毛绒短上衣与灯芯绒",
    "prompt": "fuzzy crop top,baggy corduroy pants,platform converse,scrunchie on wrist,messy low bun,round glasses"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "蕾丝吊带与露内裤边",
    "prompt": "white lace camisole,low rise baggy jeans,visible underwear,pointed heels,pearl choker,blowout hair"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "短球衣与双马尾",
    "prompt": "sports jersey cropped,pleated mini skirt white,leg warmers,dad sneakers,visor sunglasses,twin tails"
  },
  {
    "group": "Y2K 街头辣妹风",
    "name": "纹身网衣与皮裤",
    "prompt": "sheer mesh top tattoo print,black leather pants straight,chunky boots,silver chain stack,messy mullet hair,dark makeup"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "驼色大衣与黑蕾丝",
    "prompt": "oversized camel wool coat,open front,black sheer lace top,see-through,low rise baggy jeans,chunky white sneakers,knit beanie,layered gold chains"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "短羽绒与皮裙",
    "prompt": "black puffer jacket,cropped,sheer black camisole,straps visible,leather mini skirt,black combat boots,fur bucket hat,silver hoop earrings"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "格纹风衣与工装裤",
    "prompt": "plaid trench coat,belted,white ribbed tank top,sheer fabric,olive cargo pants,platform loafers,oversized scarf,quilted crossbody bag"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "牛仔羊羔毛与网眼",
    "prompt": "denim shearling jacket,fur collar,black sheer long sleeve mesh,shiny black leggings,white dad sneakers,fingerless knit gloves,velvet choker"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "酒红皮西装与蕾丝连体",
    "prompt": "burgundy leather blazer,long jacket,sheer black lace bodysuit,lingerie visible,low rise straight jeans,black ankle boots,wool beret,layered rings"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "羽绒背心与帽衫裙",
    "prompt": "charcoal puffer vest,layered look,sheer black crop camisole,black mini hoodie dress,white high top converse,pom pom beanie,chain belt"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "驼色开衫与叠穿",
    "prompt": "oversized camel cardigan,buttoned,sheer white camisole peeking out,graphic tee,black platform sneakers,long knit scarf,corduroy dad cap"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "黑大衣与灰卫裤",
    "prompt": "black wool coat,midi length,sheer black turtleneck mesh,grey marl sweatpants,cuffed,chunky suede boots,fur earmuffs,nylon mini backpack"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "缎面飞行员与格纹裙",
    "prompt": "olive satin bomber jacket,sheer black halter top,straps,low rise plaid mini skirt,white knee socks,lace-up combat boots,faux fur trapper hat"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "泰迪熊外套与皮裤",
    "prompt": "cream teddy coat,long faux fur,sheer black lace camisole,black shiny leather pants,white ribbed beanie,oversized check scarf,gold hoop earrings"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "海军呢与条纹毛衣",
    "prompt": "navy peacoat,double breasted,sheer white mesh long sleeve,oversized striped sweater,black dr martens,fisherman beanie,cross necklace"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "黑皮草与连帽衫",
    "prompt": "black faux fur jacket,cropped,sheer black crop top,straps,white hoodie,half tucked,white platform converse,leather gloves,quilted bucket hat"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "锈红长羽绒与透视",
    "prompt": "rust longline puffer coat,sheer black camisole peeking out,black mesh panel leggings,white air max sneakers,infinity scarf,plush earmuffs"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "灰格西装与丝绒裙",
    "prompt": "oversized grey check blazer,sheer black lace bodysuit,black velvet mini dress,studded ankle boots,leather beret,chain anklet"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "米色风衣与高领叠穿",
    "prompt": "beige wool blend trench,sheer white halter top,cream roll neck sweater,chunky white sneakers,long knit gloves,wool dad cap"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "黑皮风衣与卫衣",
    "prompt": "long black leather trench coat,sheer black long sleeve crop top,white graphic sweatshirt,shiny platform loafers,oversized plaid scarf,nose ring"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "墨绿羽绒与高领裙",
    "prompt": "forest green cropped puffer,sheer black camisole,straps,black turtleneck mini dress,white combat boots,cable knit beanie,layered bracelets"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "白皮草与网眼内搭",
    "prompt": "white faux fur midi coat,sheer black mesh crop top,black hoodie dress,white platform sneakers,knit earmuffs,chain mini bag"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "炭灰大衣与慢跑裤",
    "prompt": "charcoal wool coat,belted,sheer white lace long sleeve,grey marl joggers,black dr martens,long check scarf,shearling trapper hat"
  },
  {
    "group": "都市冬季辣妹风",
    "name": "飞行员夹克与叠穿",
    "prompt": "camel shearling aviator jacket,sheer black halter bodysuit,black fitted roll neck,white air force 1,leather aviator gloves,nylon bucket hat"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "黑色乳胶连体衣",
    "prompt": "glossy black latex bodysuit,form fitting,sheer black thigh-high stockings,red patent leather pumps,pointed toe,velvet choker with spikes,silver nipple piercings,gothic fashion"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "网眼连体衣与束带",
    "prompt": "black mesh catsuit,long sleeves,see-through,opaque black overknee socks,black stiletto ankle boots,leather chest harness,red satin gloves,contrast textures"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "天鹅绒深V连体衣",
    "prompt": "black velvet bodysuit,deep v-neck,plunge,fishnet thigh-high stockings,black platform heels,strappy,wide spiked collar,gold chain belt,luxury goth"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "缎面胸衣与面罩",
    "prompt": "black satin corset bodysuit,lingerie,sheer black hold-up stockings,lace trim,black lace-up knee boots,black lace mask,diamond choker,elegant"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "皮革连体衣与唇环",
    "prompt": "black leather catsuit,front zipper,zipper down,matte black thigh-high socks,black combat boots with heels,metal wrist cuffs,red lip ring,punk style"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "透明连体衣与珍珠",
    "prompt": "black sheer bodysuit,lace trim,lingerie,fishnet overknee stockings,black slingback heels,layered pearl choker,silver anklet chain,delicate gothic"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "挂脖缎面与红鞋",
    "prompt": "black satin halter bodysuit,backless,opaque black thigh-high socks,red velvet pumps,leather garter belt,large gold hoop earrings,chic style"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "不对称镂空连体衣",
    "prompt": "asymmetric cutout bodysuit,black fabric,sheer black hold-up stockings,black wedge heels,wide spiked bracelet,glossy black nail polish,edgy fashion"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "无肩带天鹅绒与玛丽珍",
    "prompt": "black velvet strapless bodysuit,matte black overknee socks,black mary jane platforms,chunky sole,red satin bow choker,diamond stud piercings,gothic lolita vibe"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "深V网眼与鼻环",
    "prompt": "black mesh plunge bodysuit,fishnet thigh-high stockings,black stiletto mules,leather wrist straps,silver septum ring,piercing,dark aesthetic"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "透明褶裙与腰链",
    "prompt": "black micro pleated skirt,sheer fabric,white lace bralette,crop top,sheer black thigh-high stockings,black strappy sandals,silver body chain,red choker"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "网球裙与渔网袜",
    "prompt": "white mini tennis skirt,low-rise,black mesh halter top,fishnet thigh-high stockings,white platform sneakers,layered gold anklets,black velvet wrist cuffs"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "红裙开叉与乳链",
    "prompt": "red satin slip skirt,high slit,thigh slit,black lace corset,crop top,opaque black overknee socks,red patent mules,nipple tassel chain,silver jewelry"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "粉纱裙与珍珠束带",
    "prompt": "baby pink tulle mini skirt,layered tulle,black wetlook bikini top,sheer black hold-up stockings,clear perspex heels,pearl body harness,pink satin gloves"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "铆钉皮裙与唇环",
    "prompt": "black vegan leather mini skirt,studded,white ribbed tank top,micro crop,matte black thigh-high socks,black combat sandals,silver cross choker,red lip ring"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "薰衣草裙与蝴蝶乳贴",
    "prompt": "lavender satin wrap skirt,asymmetric hem,black mesh long sleeve crop top,fishnet overknee stockings,lavender platform wedges,gold butterfly pasties"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "薄荷裙与乳胶内衣",
    "prompt": "mint green pleated micro skirt,black latex bralette,glossy,sheer black thigh-high stockings,mint jelly sandals,silver chain belt,black velvet ankle bow"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "粉色亮皮裙与网衣",
    "prompt": "hot pink vinyl mini skirt,zipper detail,white fishnet crop top,opaque black hold-up stockings,pink platform heels,gold body chain,crisscross,red glove"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "雪纺裙与红色胸衣",
    "prompt": "black chiffon ruffle skirt,sheer,red satin bustier,lace-up front,fishnet thigh-high stockings,black gladiator sandals,silver waist cincher,lace fan"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "破洞牛仔裙与星星乳贴",
    "prompt": "sky blue denim micro skirt,distressed,ripped,black mesh bodysuit,cutout,matte black overknee socks,white cowboy ankle boots,gold star pasties"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "珊瑚裙与果冻鞋",
    "prompt": "coral satin skater skirt,mini length,black velvet choker,spikes,sheer black thigh-high stockings,coral jelly platforms,silver garter ring,mesh arm warmers"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "蕾丝边裙与心形乳环",
    "prompt": "black lace trim mini skirt,floral pattern,white satin corset,micro length,fishnet overknee stockings,black mary jane heels,pearl belt,heart nipple piercings"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "黄色网球裙与乳胶",
    "prompt": "lemon yellow pleated tennis skirt,black latex crop top,zipper front,opaque black thigh-high socks,yellow platform sandals,gold chain anklet,black garter"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "网眼裙与毛绒手铐",
    "prompt": "black mesh mini skirt,layered,pink satin bralette,bow detail,sheer black hold-up stockings,black wedge sneakers,silver body chain,pink fluffy cuffs"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "象牙裙与皮束带",
    "prompt": "ivory satin slip skirt,thigh slit,black leather harness top, style,fishnet thigh-high stockings, strappy heels,gold collar,fingerless lace gloves"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "电光蓝裙与金属凉鞋",
    "prompt": "electric blue vinyl skirt,wrap skirt,white mesh crop top,long sleeves,matte black overknee socks,blue metallic sandals,silver septum ring,satin wrist ties"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "人造皮裙与面罩",
    "prompt": "black faux leather pleated micro skirt,red lace balconette bra,sheer black thigh-high stockings,red platform ankle boots,layered belly chain,velvet mask"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "桃色雪纺裙与心锁",
    "prompt": "peach chiffon ruffle skirt,mini,black satin bustier,boned,fishnet overknee stockings,peach suede wedges,silver heart lock choker,mesh shrug"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "亮面溜冰裙与乳胶短上衣",
    "prompt": "black satin skater skirt,glossy,white latex micro crop top,opaque black hold-up stockings,black patent platforms,gold ring choker,red leg bow"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "丁香纱裙与果冻拖鞋",
    "prompt": "lilac tulle mini skirt,tiered,black velvet bralette,spikes,sheer black thigh-high stockings,lilac jelly mules,silver waist chain,lace anklets"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "高腰乳胶内裤与身体链",
    "prompt": "black high-waist latex panties,glossy,white ribbed micro tank,sheer black thigh-high stockings,black platform sandals,silver body chain,red patent choker"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "高腰缎面内裤与湿亮夹克",
    "prompt": "white high-waist satin briefs,seamless,black wetlook crop jacket,open front,fishnet overknee stockings,white strappy heels,gold chain belt,velvet cuffs"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "红皮内裤与网眼披肩",
    "prompt": "red high-waist leather panties,zipper detail,black mesh shrug,opaque black hold-up stockings,red combat mules,silver metal waist cincher,ankle bow"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "挂脖湿亮连体衣",
    "prompt": "black high-waist bodysuit,halter neck,wetlook,matte black thigh-high socks,black stiletto ankle boots,minimal gold collar,red latex elbow gloves"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "裸色网眼内裤与透明鞋",
    "prompt": "high-waist mesh panties,high cut,black latex micro crop,zipper,sheer black overknee stockings, perspex platforms,silver body chain"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "深V缎面连体衣",
    "prompt": "black high-waist satin bodysuit,deep plunge,fishnet thigh-high stockings,black gladiator sandals,thin silver septum ring,red velvet spiked choker"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "祖母绿乙烯基内裤",
    "prompt": "emerald high-waist vinyl briefs,bow front,white cotton ribbed bralette,opaque black thigh-high socks,emerald jelly wedges,gold anklet,mesh arm warmers"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "露背网眼连体衣",
    "prompt": "black high-waist mesh bodysuit,backless,sheer black hold-up stockings,black mary jane platforms,silver garter ring,red satin wrist ribbons"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "粉色哑光乳胶内裤",
    "prompt": "pink high-waist latex panties,matte finish,black vinyl crop top,asymmetric,fishnet overknee stockings,pink platform mules,gold body chain,patent ankle strap"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "无肩带皮连体衣",
    "prompt": "black high-waist leather bodysuit,strapless,matte black thigh-high socks,black wedge sneakers,silver heart lock collar,red mesh shrug"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "宽腰缎面内裤与牛仔靴",
    "prompt": "white high-waist satin briefs,wide waistband,black wetlook halter crop,opaque black overknee stockings,white cowboy boots,gold star choker,latex garter"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "侧镂空乙烯基连体衣",
    "prompt": "black high-waist vinyl bodysuit,side cutouts,fishnet thigh-high stockings,black combat platform sandals,silver o-ring belt,red satin glove"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "薰衣草网眼内裤",
    "prompt": "lavender high-waist mesh panties,seamless,black satin micro crop,bow,sheer black hold-up stockings,lavender jelly sandals,gold chain anklet,velvet mask"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "前拉链乳胶连体衣",
    "prompt": "black high-waist latex bodysuit,front zipper,opaque black thigh-high socks,black patent combat heels,silver waist chain,red latex garter bow"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "珊瑚荷叶边内裤",
    "prompt": "coral high-waist satin briefs,ruffle trim,white mesh long sleeve crop,fishnet overknee stockings,coral suede platforms,layered belly chain,mesh shrug"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "不对称湿亮连体衣",
    "prompt": "black high-waist wetlook bodysuit,asymmetric,sheer black thigh-high stockings,black slingback platforms,nipple chain,red satin wrist ties"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "薄荷侧蝴蝶结内裤",
    "prompt": "mint high-waist vinyl panties,side bow,black micro tank,matte black hold-up stockings,mint metallic wedges,butterfly anklet,wide patent choker"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "挂脖缎面连体衣",
    "prompt": "black high-waist satin bodysuit,halter,fishnet thigh-high stockings,black platform ankle boots,silver body harness,red velvet opera gloves"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "天蓝亮面乳胶内裤",
    "prompt": "sky blue high-waist latex briefs,glossy,white ribbed long sleeve crop,opaque black overknee socks,blue jelly mules,gold ring choker,mesh arm warmers"
  },
  {
    "group": "暗黑夜店系前卫风",
    "name": "深V网眼与腿弓",
    "prompt": "black high-waist mesh bodysuit,deep v,sheer black thigh-high stockings with garter,black stiletto knee sandals,silver waist cincher,red leg bow"
  },
  {
    "group": "海滩度假风",
    "name": "钩针比基尼与解扣牛仔",
    "prompt": "crochet bikini top,knitted texture,handmade,denim cutoffs,unbuttoned shorts,open fly,flip flops,sandals,beach background,boho style"
  },
  {
    "group": "海滩度假风",
    "name": "高叉连体与大草帽",
    "prompt": "one piece swimsuit,high cut,high leg,oversized straw hat,wide brim hat,sarong,pareo tied at waist,beach walk,windy,summer vibe"
  },
  {
    "group": "海滩度假风",
    "name": "迷你比基尼与透视罩衫",
    "prompt": "micro triangle bikini,minimal coverage,sheer mesh coverup,see-through beach dress,shell anklet,puka shell,barefoot in sand"
  },
  {
    "group": "海滩度假风",
    "name": "防晒衣与冲浪少女",
    "prompt": "cropped rash guard,long sleeves,tight fit,cheeky bikini bottoms,surfboard leash,holding surfboard,surfer girl,wet hair"
  },
  {
    "group": "海滩度假风",
    "name": "霓虹抹胸与防晒霜",
    "prompt": "neon bandeau bikini,strapless,bright colors,board shorts,low waist,wearing low,zinc sunscreen on nose,white cream on nose,playful"
  },
  {
    "group": "海滩度假风",
    "name": "解开的比基尼与亚麻衫",
    "prompt": "string bikini,sides untied,loose strings,white linen shirt,open shirt,wet shirt,bare feet,ocean background,teasing"
  },
  {
    "group": "海滩度假风",
    "name": "拉链泳衣与遮阳帽",
    "prompt": "sporty swimsuit,front zipper,zipper down,sun visor,visor cap,waterproof pouch,neck strap,pool side"
  },
  {
    "group": "海滩度假风",
    "name": "镂空泳衣与身链",
    "prompt": "monokini,side cutouts,trikini,floppy hat,straw hat,gold body chain,jewelry on belly,tanning,lying on towel"
  },
  {
    "group": "海滩度假风",
    "name": "挂脖比基尼与脚趾环",
    "prompt": "halter bikini top,tied neck,pareo wrap,low waist sarong,toe rings,jewelry on feet,barefoot,sand texture,close up on feet"
  },
  {
    "group": "海滩度假风",
    "name": "湿T恤与透视比基尼",
    "prompt": "wet tshirt contest,white t-shirt,wet clothes,clinging to skin,translucent,thong bikini visible,sunglasses,crowd background"
  },
  {
    "group": "海滩度假风",
    "name": "复古高腰与猫眼墨镜",
    "prompt": "retro high waist bikini,vintage style,polka dot,cat eye sunglasses,large beach tote,straw bag,50s fashion,pinup girl"
  },
  {
    "group": "海滩度假风",
    "name": "冲浪防晒与下垂沙滩裤",
    "prompt": "surf bikini,rashie,boardshorts,sagging pants,low slung,ankle bracelet,woven anklet,carrying surfboard,athletic body"
  },
  {
    "group": "海滩度假风",
    "name": "绑带比基尼与和服袍",
    "prompt": "strappy bikini,cage bikini,complex straps,kimono robe,open robe,floral print,wedge heels,sandals,resort wear"
  },
  {
    "group": "海滩度假风",
    "name": "金属比基尼与船长帽",
    "prompt": "metallic bikini,gold shimmer,silver fabric,captain hat,sailor hat,temporary tattoo,sticker tattoo,festival beach party"
  },
  {
    "group": "海滩度假风",
    "name": "钩针连体与牛仔外套",
    "prompt": "crochet monokini,knitted swimwear,boho chic,oversized denim jacket,off shoulder,shell necklace,puka shells,sunset"
  },
  {
    "group": "海滩度假风",
    "name": "扎染比基尼与渔夫帽",
    "prompt": "tie dye bikini,colorful,bucket hat,street beach style,waterproof watch,g-shock,casual,splashing water"
  },
  {
    "group": "海滩度假风",
    "name": "露下乳与木槿花",
    "prompt": "underboob bikini top,southern hemisphere,sarong skirt,high slit,showing leg,hibiscus flower hair clip,tropical island"
  },
  {
    "group": "海滩度假风",
    "name": "运动比基尼与霓虹美甲",
    "prompt": "sport bikini,zip front,mesh beach bag,see-through bag,neon pedicure,painted toes,bright nail polish,fitness model"
  },
  {
    "group": "海滩度假风",
    "name": "贝壳比基尼与花环",
    "prompt": "seashell bikini,mermaid style,shell shaped cups,hibiscus print pareo,lei necklace,flower garland,hawaii,aloha"
  },
  {
    "group": "海滩度假风",
    "name": "透明肩带与亚麻短裤",
    "prompt": "clear strap bikini,invisible straps,white linen shorts,casual,coral earrings,red jewelry,blue ocean,bright sunlight"
  },
  {
    "group": "优雅夜宴风",
    "name": "丝绸衬衫与珍珠项圈",
    "prompt": "silk blouse,unbuttoned low,deep v-neck,pearl choker,necklace,pencil skirt,tight skirt,thigh slit,office lady,elegant"
  },
  {
    "group": "优雅夜宴风",
    "name": "羊绒高领与吊带袜",
    "prompt": "cropped cashmere turtleneck,ribbed texture,midriff,navel,lace garter belt,garter straps peeking,stiletto heels,high heels,legs"
  },
  {
    "group": "优雅夜宴风",
    "name": "缎面吊带与歌剧手套",
    "prompt": "shiny satin camisole,slip top,tailored blazer,open jacket, over shoulders,long opera gloves,satin gloves,formal wear,sophisticated"
  },
  {
    "group": "优雅夜宴风",
    "name": "雪纺透视与钻石身链",
    "prompt": "sheer chiffon wrap dress,see-through,translucent fabric,diamond body chain,jewelry on skin, heels,legs,ethereal lighting"
  },
  {
    "group": "优雅夜宴风",
    "name": "天鹅绒中裙与后背系带",
    "prompt": "velvet midi dress,side slit,high slit,corset lacing,laced back,backless,drop earrings,gemstone earrings,evening gown,luxury texture"
  },
  {
    "group": "优雅夜宴风",
    "name": "蕾丝胸衣衬衫与高腰裤",
    "prompt": "lace bodice blouse,sheer sleeves,high waisted trousers,dress pants,pleated pants,antique brooch,gold pin,business casual,sharp look"
  },
  {
    "group": "优雅夜宴风",
    "name": "露肩针织与皮草披肩",
    "prompt": "off-shoulder knit top,clavicle,shiny satin micro shorts,hotpants,fur stole,fluffy shawl,contrast textures,cozy,winter fashion"
  },
  {
    "group": "优雅夜宴风",
    "name": "丝绸睡袍与穆勒鞋",
    "prompt": "silk robe,open front,lingerie underneath,lace trim,thigh high stockings,mule heels,slide sandals,boudoir,morning light"
  },
  {
    "group": "优雅夜宴风",
    "name": "打结衬衫与皮革短裙",
    "prompt": "tailored white shirt,knotted front,tied shirt,midriff,black leather mini skirt,shiny leather,cufflinks,rolled sleeves,confident pose"
  },
  {
    "group": "优雅夜宴风",
    "name": "羊绒开衫与蕾丝内衣",
    "prompt": "cashmere cardigan, over shoulders,open cardigan,lace bralette visible,pointed toe pumps,heels,soft focus,gentle"
  },
  {
    "group": "优雅夜宴风",
    "name": "斜裁缎裙与骨架胸衣",
    "prompt": "satin bias cut skirt,silk skirt,corset top,structural boning,strapless,ribbon choker,velvet ribbon,elegant,evening party"
  },
  {
    "group": "优雅夜宴风",
    "name": "欧根纱与开衩阔腿裤",
    "prompt": "sheer organza blouse,puff sleeves,high slit palazzo pants,wide leg pants,leg out,gold anklet,walking,dynamic flow"
  },
  {
    "group": "优雅夜宴风",
    "name": "西装裙与袜缝",
    "prompt": "velvet blazer dress,double breasted,seamed stockings,back seam,wide patent belt,shiny belt,waist cinch,dark mode,chic"
  },
  {
    "group": "优雅夜宴风",
    "name": "蕾丝吊带与皮草大衣",
    "prompt": "lace trim slip dress,satin nightgown,opera coat,fur trim,holding clutch bag,evening bag,luxury,rich lady,night out"
  },
  {
    "group": "优雅夜宴风",
    "name": "丝绸铅笔裙与后背拉链",
    "prompt": "silk pencil dress,tight fit,unzipped back,zipper down,bare back,elbow length gloves,jewelry rings,from behind,sensual"
  },
  {
    "group": "优雅夜宴风",
    "name": "挂脖长裙与大腿钻饰",
    "prompt": "chiffon halter gown,high slit,diamond thigh garter,jewelry on leg,strappy sandals,elegant standing pose"
  },
  {
    "group": "优雅夜宴风",
    "name": "剪裁马甲与松散领带",
    "prompt": "tailored vest,suit vest,buttoned low,no shirt,micro pleated skirt,loose necktie,menswear inspired, formal,gray and black"
  },
  {
    "group": "优雅夜宴风",
    "name": "缎面裹衣与皮裤",
    "prompt": "satin wrap top,asymmetric design,shiny leather leggings,tight pants,large hoop earrings,gold hoops,modern fashion,urban style"
  },
  {
    "group": "优雅夜宴风",
    "name": "羊绒套装与小猫跟",
    "prompt": "cashmere twinset,cardigan and camisole,pearl necklace,thong straps visible,whale tail,kitten heels,low heels,classy but naughty"
  },
  {
    "group": "优雅夜宴风",
    "name": "泡泡袖与乙烯基铅笔裙",
    "prompt": "organza blouse,huge puff sleeves,translucent,black vinyl pencil skirt,glossy skirt,layered necklaces,gold chains,high fashion"
  },
  {
    "group": "校园辣妹风",
    "name": "白衬衫松领与绝对领域",
    "prompt": "white collared shirt,unbuttoned top,untied,messy,pleated mini skirt,black knee high socks,absolute territory,zettai ryouiki,disheveled school uniform"
  },
  {
    "group": "校园辣妹风",
    "name": "西装敞开与蕾丝内衣",
    "prompt": "navy blue blazer,open jacket,lace bralette visible,peek,pleated skirt,brown loafers,school emblem,rebellious student"
  },
  {
    "group": "校园辣妹风",
    "name": "松散领带与厚底玛丽珍",
    "prompt": "plaid necktie,loose tie,undone,micro pleated skirt,tartan,mary jane platforms,thick sole,high heels,white socks,standing pose"
  },
  {
    "group": "校园辣妹风",
    "name": "低扣开衫与吊袜带",
    "prompt": "beige cardigan,buttoned low,deep v-neck,thigh garter straps,thigh holster,oxford shoes,classic school uniform"
  },
  {
    "group": "校园辣妹风",
    "name": "毛背心与裙底走光",
    "prompt": "school sweater vest,knitted vest,v-neck,lifting skirt,panchira,panties visible,cheeky,white ankle socks,classroom background"
  },
  {
    "group": "校园辣妹风",
    "name": "半塞衬衫与苏格兰裙",
    "prompt": "white button shirt,half tucked,messy tuck,red tartan mini kilt,safety pin,black knee boots,leather boots,fashion jk"
  },
  {
    "group": "校园辣妹风",
    "name": "短款菱格与侧露丁字裤",
    "prompt": "cropped argyle sweater,diamond pattern,midriff,navel,satin thong straps,whale tail,side hips,penny loafers,gyaru style"
  },
  {
    "group": "校园辣妹风",
    "name": "西装裙与渔网袜",
    "prompt": "black blazer dress,mini dress,double breasted,fishnet stockings,fishnet tights,artist beret,hat,chic,kpop style"
  },
  {
    "group": "校园辣妹风",
    "name": "超大衬衫与缎带项圈",
    "prompt": "oversized white oxford shirt,boyfriend shirt,micro skirt,belt,ribbon choker,neck ribbon,collarbone,loose fit"
  },
  {
    "group": "校园辣妹风",
    "name": "飞扬裙摆与短卫衣",
    "prompt": "plaid skirt,skirt flip,wind blowing,flying skirt,cropped hoodie,hood down,sneakers,sport socks,dynamic angle"
  },
  {
    "group": "校园辣妹风",
    "name": "扎染校T与厚底牛津",
    "prompt": "tie dye t-shirt,school gym clothes style,garter belt visible,waist peek,platform oxfords,chunky shoes,harajuku fashion"
  },
  {
    "group": "校园辣妹风",
    "name": "裙装套组与蕾丝吊带",
    "prompt": "navy skirt suit,matching set,jacket open,lace camisole,silk inner,brooch,gold pin,elegant,office lady vibe"
  },
  {
    "group": "校园辣妹风",
    "name": "学院风背心与热裤",
    "prompt": "argyle sweater vest,preppy style,micro hotpants,denim shorts,black knee socks,thighs,leaning forward"
  },
  {
    "group": "校园辣妹风",
    "name": "松开领结与马丁靴",
    "prompt": "white blouse,ribbon bow,untied bow,loose ribbon,high waisted pleated skirt,dr martens,combat boots,grunge aesthetic"
  },
  {
    "group": "校园辣妹风",
    "name": "滑落西装与露肩",
    "prompt": "falling off shoulders,blazer off shoulder,bralette straps,bare shoulders,ankle boots,messy hair,after school"
  },
  {
    "group": "校园辣妹风",
    "name": "短款Polo与运动短裤",
    "prompt": "cropped polo shirt,school uniform,midriff,cheeky boy shorts,gym bloomers,scrunchie on wrist,ponytail,sporty"
  },
  {
    "group": "校园辣妹风",
    "name": "大号格子西装与匡威",
    "prompt": "oversized plaid blazer,boyfriend jacket,thigh high socks,garter straps,converse sneakers,high tops,sitting on desk"
  },
  {
    "group": "校园辣妹风",
    "name": "卷袖衬衫与腿部绑带",
    "prompt": "white shirt,sleeves rolled up,forearms,micro kilt,kilt pin,ribbon ties on legs,balletcore elements,soft lighting"
  },
  {
    "group": "校园辣妹风",
    "name": "披肩开衫与蕾丝连体",
    "prompt": "cardigan,open,lace teddy,bodysuit,lingerie peek,saddle shoes,retro schoolgirl,library background"
  },
  {
    "group": "校园辣妹风",
    "name": "翻裙马甲与蝴蝶结袜",
    "prompt": "navy vest,buttoned low,pleated skirt,skirt flip,windy,knee socks,ribbon on socks,cute pose,looking down"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "全息卫衣与乙烯基裙",
    "prompt": "holographic crop hoodie,iridescent jacket,zipper low,micro pleated vinyl skirt,shiny skirt,platform combat boots,futuristic fashion,cyberpunk"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "霓虹网衣与反光腰带",
    "prompt": "neon mesh bodysuit,cutouts,see-through,glowing fabric,low rise cargo mini skirt,utility pockets,reflective chain belt,streetwear,night city"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "乳胶内衣与破洞牛仔",
    "prompt": "black latex bralette,push-up,shiny,distressed denim micro shorts,frayed hem,chunky neon sneakers,glowing shoes,contrast textures"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "亮片挂脖与透明跟",
    "prompt": "sequin halter crop top,tie neck,sparkling,fishnet thigh highs,garter straps,clear lucite heels,transparent shoes,party girl"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "金属比基尼与荧光棒",
    "prompt": "metallic micro bikini top,silver fabric,oversized bomber jacket,open jacket,glow stick choker,holding glow sticks,rave fashion,festival outfit"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "闪光网T与老爹鞋",
    "prompt": "sheer sparkle mesh tee,glitter, visible,high cut thong,whale tail,pulled up straps,platform dad sneakers,chunky sole,90s vibe"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "亮皮风衣与铆钉靴",
    "prompt": "short vinyl trench coat,glossy coat,lingerie straps peeking,garter straps,studded ankle boots,punk style,edgy,dark lipstick"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "霓虹毛绒与缎面热裤",
    "prompt": "neon fur crop shrug,fluffy bolero,bright pink,satin micro hotpants,shiny shorts,layered hoop earrings,gyaru makeup,tanned skin"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "反光背心与大腿包",
    "prompt": "reflective puffer vest,open vest,shiny down jacket,micro pleated cheer skirt,thigh garter wallet,leg accessory,sporty chic"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "网袖上衣与喇叭短裙",
    "prompt": "mesh sleeve crop top,sheer sleeves,low slung flare mini skirt,bell bottom skirt,clear strap bra,invisible straps,y2k aesthetic"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "漆皮文胸与撕裂渔网",
    "prompt": "patent leather bra top,pvc top,ripped fishnet leggings,torn tights,grunge style,platform mules,slip-on heels,dark eyeliner"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "闪光紧身裙与霓虹足",
    "prompt": "glitter bodycon micro dress,tight fit,side cutout,metal chains,neon pedicure,painted toes,barefoot in sandals,clubwear"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "全息外套与发光踝链",
    "prompt": "holographic track jacket,unzipped,iridescent,latex micro shorts,tight shorts,glow anklet,led jewelry,flash"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "亮片短裤与滑落抹胸",
    "prompt": "sequin micro shorts,sparkling,bandeau top,slipping down,wardrobe malfunction,chunky chain necklace,gold chain,bling"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "霓虹网裙与高开衩",
    "prompt": "neon mesh dress,see-through,high slit,leg out,thong straps visible,hip bone,platform sandals,summer night,vibrant colors"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "乙烯基夹克与大扣腰带",
    "prompt": "vinyl crop jacket,open jacket,micro denim skirt,large belt buckle,western y2k,reflective sunglasses,shades,cool attitude"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "金属耸肩与霓虹袜",
    "prompt": "metallic crop shrug,silver sleeves,high waist vinyl hotpants,shiny latex,neon socks,glowing socks,retro futurism"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "水钻连体与苏格兰裙",
    "prompt": "sheer rhinestone bodysuit,gems on skin,low rise mini kilt,plaid skirt,studded combat boots,punk rock,concert outfit"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "前拉链乳胶与工装裙",
    "prompt": "latex crop top,front zipper,zipper pull,distressed cargo micro skirt,frayed,platform canvas shoes,high top sneakers,casual"
  },
  {
    "group": "电音派对风 / Rave 节奏风",
    "name": "夜光T恤与派对现场",
    "prompt": "glow in the dark mesh tee,UV light,blacklight,micro pleated metallic skirt,clear platform heels,rave party,dancing,dynamic pose"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "粉色丝绒运动服与鲸尾",
    "prompt": "baby pink velour tracksuit,zipper down,micro thong,whale tail,visible underwear,chunky platform flip flops,2000s aesthetic,mcbling"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "银色金属风与迷彩短裙",
    "prompt": "metallic silver crop hoodie,shiny fabric,low rise camouflage miniskirt,butterfly choker,hair clips,retro techwear,midriff"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "亮片抹胸与低腰工装裤",
    "prompt": "glitter tube top,strapless,sparkling,baggy cargo pants,sagging pants,underwear peeking,chunky sneakers,street fashion"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "婴儿蓝T恤与下背纹身",
    "prompt": "baby blue baby tee,cropped top,micro denim skirt,frayed hem,lower back tattoo,tramp stamp,gyaru style,cute"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "水钻肚链与低腰喇叭裤",
    "prompt": "rhinestone belly chain,dangling jewelry,navel piercing,ultra low rise flare jeans,ripped jeans,platform uggs,furry boots"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "网眼长袖与霜感唇妆",
    "prompt": "sheer mesh long sleeve,crop top,satin micro hotpants,shiny satin,frosted lip gloss,pale lipstick,heavy makeup"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "丝绒系带裙与透明高跟",
    "prompt": "velour mini dress,side tie,lace up,visible thong,whale tail,clear strap heels,pvc heels,party wear,seductive"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "蝴蝶上衣与双丸子头",
    "prompt": "butterfly crop top,clip front,deep ,low rise pleated mini skirt,schoolgirl vibes,space buns,double bun hairstyle"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "全息比基尼与粗链腰带",
    "prompt": "holographic micro bikini top,iridescent,baggy track pants,rolled down waist,chunky chain belt,hip hop style"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "亮闪网眼罩衫与作战靴",
    "prompt": "glitter mesh shrug,long sleeves,micro camo skirt,military style,platform combat boots,goth gf,edgy"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "复古Logo上衣与霜感眼影",
    "prompt": "baby phat logo crop top,y2k fashion,low rise velvet shorts,frosted eyeshadow,blue eyeshadow,retro makeup"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "水钻项圈与工装超短裙",
    "prompt": "tight rhinestone choker,satin bandeau,twisted top,micro cargo skirt,utility pockets,gyaru makeup"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "金属羽绒背心与厚底凉鞋",
    "prompt": "metallic crop puffer vest,shiny down vest,thong straps,whale tail,platform sandals,chunky sole,futuristic"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "丝绒渔夫帽与网球裙",
    "prompt": "velour bucket hat,tilted hat,micro pleated tennis skirt,white skirt,chunky hoop earrings,gold earrings,sporty chic"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "亮片挂脖与霓虹运动鞋",
    "prompt": "glitter halter crop top,tie front,low rise denim micro skirt,belt,neon platform sneakers,colorful shoes"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "透视T恤与迷彩工装",
    "prompt": "sheer mesh baby tee,see-through, visible,baggy camo cargos,oversized pants,belly piercing,dangling navel ring"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "缎面短裙与透明恨天高",
    "prompt": "shiny satin micro skirt,reflective,cropped zip hoodie,unzipped,clear platform heels,stripper heels"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "蝴蝶发夹与老爹鞋",
    "prompt": "sparkling butterfly hair clips,hair accessories,low rise velvet mini skirt,chunky dad sneakers,white sneakers,thick sole"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "水钻网衣与铆钉热裤",
    "prompt": "rhinestone mesh long sleeve,sparkling net,micro hotpants,studded shorts,platform mules,slip-on heels"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "粉色迷彩与侧露丁字裤",
    "prompt": "baby pink camo crop jacket,camouflage print,visible g-string,side straps,frosted platform boots,white boots"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "水钻短上衣与胯骨",
    "prompt": "rhinestone micro crop top,gem details,low rise mini skirt,pelvic bone,glitter platform heels,sparkling shoes"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "霓虹抹胸与乙烯基热裤",
    "prompt": "neon tube top,strapless,fluorescent green,vinyl hotpants,shiny latex,big hoop earrings,gyaru style,tanned skin"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "透视连体衣与细高跟靴",
    "prompt": "sheer mesh bodysuit,see-through,belly chain,dangling,stiletto boots,high heel boots,edgy fashion"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "乳胶文胸与名牌项圈",
    "prompt": "latex bralette,push-up,shiny,micro denim shorts,frayed,choker with nameplate,gold text,sassy"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "亮片挂脖与比基尼侧带",
    "prompt": "sequin halter crop,sparkling,open back,thong bikini,side ties,platform sandals,summer vibe"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "渔网罩衫与霓虹美甲",
    "prompt": "fishnet crop long sleeve,net top,leather mini skirt,belt,neon pedicure,painted toes,barefoot in sandals"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "扭结抹胸与身体闪粉",
    "prompt": "twisted satin bandeau,strapless,low slung cargo mini skirt,very low waist,body glitter,shimmering skin"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "金属比基尼与撕裂渔网",
    "prompt": "metallic micro bikini top,silver,ripped fishnet leggings,torn tights,lucite heels,clear heels,cyberpunk y2k"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "丝绒帽衫与多层项链",
    "prompt": "velour crop hoodie,zipper low,pleated micro skirt,layered necklaces,jewelry stack"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "闪光透视T与高叉提带",
    "prompt": "sheer sparkle mesh tee,glitter,high cut thong,pulled up straps,platform sneakers,sporty"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "漆皮文胸与腿环",
    "prompt": "patent leather bra top,shiny black,micro pleated cheer skirt,cheerleader style,thigh garter,leg ring"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "全息夹克与发光棒",
    "prompt": "holographic crop jacket,open jacket,iridescent,latex micro shorts,tight fit,holding glow sticks,rave fashion"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "紧项圈与滑落的抹胸",
    "prompt": "tight rhinestone choker,diamond collar,bandeau top,slipping down,wardrobe malfunction,mini skirt,large belt buckle"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "霓虹毛外套与漆皮内衣",
    "prompt": "neon fur crop coat,fluffy jacket,vinyl bralette,pvc bra,platform combat boots,punk aesthetic"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "网眼耸肩与鼻环",
    "prompt": "mesh sleeve crop shrug,bolero,micro hotpants,studded details,hoop nose ring,septum piercing"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "缎面胸衣与喇叭短裙",
    "prompt": "boned satin corset,lingerie top,low rise flare mini skirt,ankle strap heels,feminine"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "闪光紧身裙与侧镂空",
    "prompt": "glitter bodycon micro dress,tight dress,cutout sides,skin exposure,clear strap bra,invisible straps"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "乳胶上衣与链条腰带",
    "prompt": "latex crop top,zipper front,denim micro skirt,distressed,destroyed denim,chain belt,metal chain"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "亮片短裤与穆勒鞋",
    "prompt": "sequin micro shorts,sparkling shorts,halter crop top,tie front,platform mules,retro party"
  },
  {
    "group": "Y2K 辣妹风（千禧年）",
    "name": "霓虹网裙与发光踝链",
    "prompt": "neon mesh dress,high slit,leg out,thong straps visible,whale tail,glow anklet,led jewelry,night club"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "丝绸长袍与钻石项圈",
    "prompt": "silk charmeuse robe,open robe,revealing body,diamond choker,diamond collar,silver chain leash,barefoot,jewelry anklets,luxury interior,soft lighting"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "羊绒外套与珍珠身链",
    "prompt": "long cashmere wrap coat,coat trailing,velvet wrist cuffs,peeking out from sleeves,pearl body chain,against skin,warm lighting,elegant,expensive look"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "缎面礼服与金乳环",
    "prompt": "satin evening gown,high slit,showing leg,plunging neckline,gold nipple rings,piercing peeking out through fabric,stiletto mules,high heels,red carpet background"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "皮草披肩与皮革吊袜带",
    "prompt": "fur stole, over shoulders,leather garter straps,thigh highs,peeking out,long opera gloves,leather gloves,evening wear,cocktail party,rich texture"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "雪纺透视与钻趾环",
    "prompt": "sheer chiffon lingerie,see-through,transparent,platinum choker,O-ring,metal collar,diamond toe rings,barefoot,pedicure,bedroom lighting,boudoir"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "天鹅绒西装与丝绳",
    "prompt": "velvet blazer dress,deep v-neck,unbuttoned,silk rope belt, rope,decorative knot,locking cufflinks,wrist restraints,formal wear,office lady style"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "紧身胸衣与水貂外套",
    "prompt": "tight corset,structural boning,mink coat,coat ,silk lining visible,gold leash clip,attached to collar,rich texture,studio lighting"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "欧根纱与乳胶短裤",
    "prompt": "organza top,puff sleeves,sheer fabric,black latex micro shorts,shiny latex,emerald anklet,gemstone jewelry,contrast textures"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "斜裁缎裙与背部锁扣",
    "prompt": "satin slip dress,midi skirt,bias cut,silky fabric,back zipper,small padlock on zipper,locking mechanism,ruby drop earrings,elegant back,rear view"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "短款羊绒与金链背带",
    "prompt": "cropped cashmere turtleneck,midriff,underboob,gold chain harness,body chain,red bottom shoes,louboutin heels,crossing legs,fashion shoot,neutral background"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "丝绸和服与玉尾塞",
    "prompt": "silk kimono,open robe,jade tail plug,green gemstone,barefoot,wearing geta,wooden sandals,japanese room,tatami,traditional meets modern"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "天鹅绒外套与钻石身链",
    "prompt": "velvet opera coat,open coat,diamond body chain,body rope,jewelry ,garter belt with wallet,stockings,luxury interior,standing,regal pose"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "露背长裙与铂金手镯",
    "prompt": "chiffon gown,halter neck,backless dress,bare back,intricate back tattoo,platinum cuff bracelets,locking bracelets,rear view,elegant,evening night"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "毛边开衫与丝带蒙眼",
    "prompt": "cashmere cardigan,fur trim,silk ribbon blindfold,covering eyes,emerald brooch,collar pin,soft focus,cozy luxury,winter fashion"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "缎面铅笔裙与隐秘牵引",
    "prompt": "tight satin pencil skirt,back slit,zipper pull ring,leash attached to zipper,patent leather heels,shiny shoes,office setting,walking,clicking heels sound"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "高定连体衣与水貂缚腕",
    "prompt": "couture bodysuit,lace details,mink stole,fur wrapped around wrists,bound wrists,diamond ear cuffs,high fashion,posing,dramatic lighting,magazine cover"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "丝绸吊带与连体金链",
    "prompt": "long silk camisole,nightgown,gold chain,wrist to ankle chain,connecting chain,barefoot,standing on persian rug,ornate interior,morning light"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "天鹅绒手套与蓝宝石",
    "prompt": "velvet opera gloves,elbow length gloves,sapphire bracelet,wearing ring gag,open mouth,elegant makeup,formal event styling,dark mood"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "羊绒大衣与腿部绳艺",
    "prompt": "cashmere maxi coat,open,silk rope on thighs,red bottom heels,louboutin,riding pose,straddling,dynamic"
  },
  {
    "group": "先锋暗黑高定风",
    "name": "欧根纱披肩与隐秘牵绳",
    "prompt": "sheer organza cape,crystal trim,sparkling,platinum chain leash,thin chain,barefoot,cold atmosphere,ethereal,princess"
  }
];

    // ==========================================
    // 核心功能：暴露到全局 (供 script.js 调用)
    // ==========================================

    // 暴露 initGenerator 到全局作用域 (解决页面空白问题)
    window.initGenerator = function(grid) {
        // 确保 database 在此作用域内可用
        if (typeof database === 'undefined' || Object.keys(database).length === 0) {
            grid.innerHTML = "<h3 style='color:red;text-align:center'>❌ 数据集未加载或为空！</h3>";
            console.error("初始化失败：database 变量未定义或为空。");
            return;
        }
        if (typeof state === 'undefined' || typeof renderCard === 'undefined' || typeof rollAll === 'undefined') {
            console.error("初始化失败：全局依赖 (state, renderCard, rollAll) 未定义。请检查 script.js 是否加载。");
            return;
        }
        
        grid.innerHTML = ''; 
        
        for (const key in database) {
            if (database.hasOwnProperty(key) && database[key].name) {
                // 1. 初始化 state 结构
                state[key] = {
                    name: database[key].name,
                    enabled: true,
                    locked: false,
                    currentValue: "点击🎲按钮生成内容" 
                };

                // 2. 渲染卡片
                const cardElement = renderCard(key, state[key]);
                grid.appendChild(cardElement);
            }
        }
        
        // 初始生成一次内容
        rollAll();
        console.log("✅ database.js: 初始化完成。");
    };

    // 暴露 rollSingle 到全局作用域 (解决 rollAll 报错问题)
    window.rollSingle = function(key) {
        if (!database[key] || !database[key].tags || database[key].tags.length === 0) {
            state[key].currentValue = "无可用数据";
            return;
        }
        
        const tags = database[key].tags;
        const randomIndex = Math.floor(Math.random() * tags.length);
        const selectedTag = tags[randomIndex];
        
        state[key].currentValue = selectedTag;
        // 注意：这里使用常规字符串拼接来避免模板字符串嵌套错误
        const cardValueElement = document.getElementById('value-' + key); 
        if (cardValueElement) {
            cardValueElement.innerText = selectedTag;
        }
        
        if (typeof buildFinalString === 'function') {
            buildFinalString();
        }
    };

})(); 
// ==========================================
// database.js - Auto-generated Wrapper End
// ==========================================
