// ============================================================
// 文件名: data/clothing.js
// 作用: 定义 "服装设定合集" 的弹窗内容
// ============================================================

console.log("⏳ 正在加载: 服装设定合集...");

window._COLLECTIONS.clothing = {
    title: "👗 服装设定合集",
    items: [
        // 格式: { name: "按钮名字", prompt: `提示词内容` },
        { 
            name: "AI 关键词生成启动词模板", 
            prompt: `(
            
请扮演一位顶尖的 Stable Diffusion 提示词工程师和服装造型师，你的任务是根据我指定的服装风格，结合你知识库中已有的高质量艺术词汇和技术参数，生成一套完整且即用的 SD 关键词。

角色扮演与工作原则
角色： 我是一名 AI 绘画爱好者,你是我的专业提示词Prompt生成助手。

核心任务： 针对我提供的风格，生成一套正向提示词 (Positive Prompt) 和一套反向提示词 (Negative Prompt)。

关键词来源： 优先从我提供的 YAML 文件 例如 zh_CN.yaml,如果没有就严格按照NAI (NovelAI) 和 SD (Stable Diffusion)官方关键词库中提取关键词，以确保风格和术语的标准化。
使用知识库中与 NAI 或 SD 风格高度相关的、经验证有效的通用关键词。确保这些词汇都是经过大量训练、确保能被主流 SD 模型包括受 NAI 影响的模型 识别的行业标准术语 例如 flat color, simple background, long hair 等）。
生成原则： 关键词必须清晰、简洁、无废话，并使用英文逗号 , 分隔。

I. 风格定义与关键词结构
请按照以下结构和优先级生成关键词：

1. 👗 核心主题与服装 (Theme & Clothing)
主体: 必须包含人物描述 例如1girl, solo, mature_female。

核心风格： 使用该风格的英文名称（如 Gothic Lolita, techwear, Hanfu。

服装细节： 包含 4-6 个具体的服装部件、材质或动作关键词 例如pleated_skirt, lace trim, leather_jacket, flowing_fabric, posing 。

2. 🎨 画面美化与环境 (Quality & Scene)

可以只保留角度/镜头、    果然如果需要强调画质、光照/氛围则就一开始单独列，不写入具体的关键词中

角度/镜头： 可以包含 1-2 个镜头词例如 full_shot, dynamic_angle, looking_at_viewer。

3. 背景可以简单使用white_background,simple_background,transparent_background,这样的关键词，专注于动作和服装，除非用户要求生成场景

II. 输出格式要求
请将最终生成的关键词严格分为以下两部分：

📌 正向提示词 (Positive Prompt)
(人物/服装主体), (动作/环境/光照))每次生成10条,   保证每次输出服装动作的独特、具有极高的艺术美感` 

        },
        
        { 
            name: "日常休闲风", 
            prompt: `(casual, loungewear, t-shirt, jeans, hoodie	simple_style, everyday_look, short sleeve T-shirts, denim)` 
        },
        
        { 
            name: "日系JK制服", 
            prompt: `(school_uniform, sailor, serafuku, pleated_skirt, collared_shirt	twintails (发型), long_sleeves/short_sleeves, necktie/bowtie, kneehighs (或 thighhighs))` 
        },
        
        { 
            name: "赛博机能风", 
            prompt: `(jacket, cargo_pants, harness, cyborg (人物), tactical gear (辅助)	armored, leather, goggles, mechanical_arms (物品/动作), neon_lights (环境)power_armor, mecha, cyborg, mecha_musume (人物),robot_ears, mechanical_arms (物品), neon_lights (环境))` 
        },
        
        { 
            name: "华丽晚礼服", 
            prompt: `(formal_dress, evening_gown, gown, long_dress, sleeveless_dress	jewelry, lace, lace-trimmed, silk (材质), high_heels, elegant (形容词))` 
        },
        
        { 
            name: "古风汉服", 
            prompt: `(hanfu, chinese_style, traditional_clothes, long_skirt (或 mamian skirt), long_coat	flowing_fabric (辅助), embroidery (装饰), hair_ornament (发饰), qi_xiong_po_qun (或 qi_xiong_zhe_qun) (唐风/宋风/明风))` 
        },
        
        { 
            name: "哥特洛丽塔", 
            prompt: `(gothic_lolita, lolita, frilled_dress, lace-trimmed_dress, pettiskirt	black_choker, lace, frilled, cross_necklace, dark_color_palette (辅助))` 
        },
        
        { 
            name: "运动健身装", 
            prompt: `(sportswear, gym_clothing (辅助), tight_pants (紧身裤), yoga_pants, gym_shorts	tight, stretching fabric (辅助), sneakers (鞋子), athletic (辅助))` 
        },
        
        { 
            name: "奇幻铠甲", 
            prompt: `(armor, full_armor, plate_armor, fantasy armor (辅助), helmet	shoulder_armor, gauntlets (辅助), boots, sword (武器), intricate details (辅助)armor, full_armor, plate_armor, japanese_armor, bikini_armor,helmet, shoulder_armor, breastplate, armored_boots)` 
        },
        { 
            name: "日式传统服饰", 
            prompt: `(japanese_clothes, kimono, yukata, furisode, obi,sleeveless_kimono, short_kimono, print_kimono, tabi (日式短袜), zouri (日式草鞋))` 
        },
        
        { 
            name: "中式传统服饰", 
            prompt: `(china_dress (旗袍), cheongsam, print_cheongsam, chinese_clothes (唐装), Taoist robe)` 
        },
        
        { 
            name: "东南亚/中东服饰", 
            prompt: `(Ao_Dai (越南校服/奥黛), harem_outfit (舞娘服), arabian_clothes, egyptian_clothes)` 
        },

        { 
            name: "奇欧洲历史/特定地域服饰", 
            prompt: `(german_clothes, byzantine_fashion (拜占庭风格), western (西部风格), tunic (束腰外衣))` 
        },
                
        { 
            name: "军事/专业制服", 
            prompt: `(military_uniform, naval_uniform, police_uniform, police (身份), soldier (身份),labcoat (白大褂), nurse, chef_uniform, space_suit, ss_uniform/nazi_uniform)` 
        },
        
        { 
            name: "女仆制服", 
            prompt: `(maid (女仆装), housemaid (身份), stile_uniform (女侍从), maid_apron)` 
        },

        { 
            name: "透明/轻薄主题", 
            prompt: `(see-through, transparent, see-through_dress, transparent_umbrella, floating_white_silk (魔法系))` 
        },

        { 
            name: "东南亚/中东服饰", 
            prompt: `(Ao_Dai (越南校服/奥黛), harem_outfit (舞娘服), arabian_clothes, egyptian_clothes)` 
        },

        { 
            name: "连体泳衣/死库水", 
            prompt: `(school_swimsuit, competition_swimsuit, one-piece_swimsuit,front_zipper_swimsuit, highleg_swimsuit)` 
        },
                
        { 
            name: "比基尼", 
            prompt: `(bikini, string_bikini, slingshot_swimsuit (V字泳衣), sports_bikini, frilled_bikini,bikini_skirt, untied_bikini, swimsuit_aside)` 
        },
        
        { 
            name: "紧身/弹性材质服饰", 
            prompt: `(bodystocking (全身袜), pantyhose (连裤袜), latex, spandex)` 
        },

        { 
            name: "皮革/乳胶主题", 
            prompt: `(leather, latex, leather_jacket, latex_gloves, latex_thighhighs)` 
        }
        // 您可以继续复制上面的块来添加更多...
    ]
};

console.log("✅ [clothing.js] 服装设定合集加载成功！");