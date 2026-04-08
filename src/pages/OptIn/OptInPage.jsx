import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings, Users, Database, CheckCircle2, PlayCircle } from 'lucide-react';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import raySalon from '../../assets/salon-photo.jpg';
import styles from './OptInPage.module.css';

const tabData = [
    {
        id: 'sop',
        title: 'SOP 形同虛設，員工一換就垮',
        icon: Settings,
        subtitle: '教了 N 次還是出錯？少了「明星員工」公司就亂？3 個步驟，讓任何人都能照著 SOP 把事情做對！',
        painPoints: '每次出問題，都要你親自下來救火？員工一離職，前任的經驗就跟著一起消失？\n這部 30 分鐘免費教學，帶你從根本解決問題：不靠個人記憶，把公司運作邏輯打造成「新人一看就懂、做完必然正確」的企業中樞系統。',
        roadmapTitle: '從天天救火，到老闆真正可以放手',
        roadmap: [
            { title: '【流程解構】找出每個斷點', desc: '把你每天在做的事拆解成清晰步驟，找出哪個環節最容易出錯，從源頭封堵問題，不再憑感覺管理。' },
            { title: '【Notion 中樞】SOP 系統化', desc: '用 Notion 把所有標準作業流程集中管理，員工隨時查、主管隨時確認，不再依賴個人記憶在運轉。' },
            { title: '【防呆設計】新人一學即上手', desc: '把流程設計成「做完就對」的防呆介面。新人入職第一週就能獨立作業，你終於能真正把事情放下。' },
        ],
        goal: '告別天天救火！公司流程自動運轉，老闆終於能專注在利潤擴張，而不是每天收拾善後。'
    },
    {
        id: 'retention',
        title: '品質忽高忽低，老客戶不回頭',
        icon: Users,
        subtitle: '費盡心思拿下第一單，卻沒有第二單？一套「品質標準化＋遊戲化留客策略」，讓顧客從「買一次」變「死忠鐵粉」！',
        painPoints: '每次交件品質都不一樣，客戶滿意度靠運氣？花了大筆廣告費拉新客，回頭率卻少得可憐？\n這部 30 分鐘教學，帶你建立從第一次接觸到結案的完整防呆服務流程，再搭配「遊戲化留客機制」，讓顧客有理由一直回來找你。',
        roadmapTitle: '從單次消費到超高回頭率，你的顧客倍增路徑',
        roadmap: [
            { title: '【服務拆解】優化每個接觸點', desc: '從顧客第一次詢問到最後結案，拆解每個服務節點，找出讓客戶失望的細節，一次性修復。' },
            { title: '【品質標準化】打造穩定口碑', desc: '建立不打折扣的服務 SOP，確保每一次交付都是最高水準。讓客戶能安心地把你推薦給身邊的人。' },
            { title: '【遊戲化留客】讓回頭成為習慣', desc: '導入會員任務、點數機制等「遊戲化策略」，讓顧客自然持續互動。回頭消費不是意外，而是設計好的結果。' },
        ],
        goal: '顧客從「買一次」變成「死忠鐵粉」，靠口碑與高回頭率帶來穩定且源源不絕的收入！'
    },
    {
        id: 'data',
        title: '資料散落各地，決策全靠記憶',
        icon: Database,
        subtitle: '重要合約在 LINE 群、客戶資料在硬碟、決策全靠記憶在撐？一套「企業資料中樞」，讓資訊秒查，讓 AI 替你工作！',
        painPoints: '要找一份合約，翻遍群組和硬碟還找不到？想導入 AI 工具，卻發現資料太散亂根本用不起來？\n這部 30 分鐘教學，帶你用 Notion 把公司所有重要資料整合進統一的關聯式資料庫，不只解決「找不到」的問題，更為你的企業打好「AI 自動化」的最完美基礎。',
        roadmapTitle: '從資料散落到智能秒查，你的極效決策路徑',
        roadmap: [
            { title: '【資訊歸攏】建立統一資料庫', desc: '把散落在 LINE 群組、信箱、Google Drive 的合約、客戶資料、各類報告，全部匯入 Notion 的統一位置。' },
            { title: '【結構梳理】標籤化與快速定位', desc: '建立資料間的連結和清晰的分類標籤。任何一筆歷史資料幾秒鐘就能精準找到，人員交接再也不斷線。' },
            { title: '【AI 串接】讓數據自動為你工作', desc: '資料結構化後，即可導入 AI 進行自動摘要、智能分類與趨勢分析，讓系統從「資料庫」升級成「智能助理」。' },
        ],
        goal: '告別找資料浪費的時間！讓資訊瞬間到位，讓 AI 替你完成繁瑣整理工作，把精力全部放在高價值決策上。'
    }
];

const KIT_FORM_ID = '9302184';

export const OptInPage = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const currentTab = tabData.find(t => t.id === activeTab);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setIsSubmitting(true);
        setError('');

        try {
            const response = await fetch(
                `https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({
                        email_address: formData.email,
                        first_name: formData.name,
                    }),
                }
            );

            if (response.ok || response.status === 200) {
                navigate('/video');
            } else {
                setError('提交時發生錯誤，請稍後再試。');
            }
        } catch (err) {
            // Network error - still navigate to avoid blocking user
            navigate('/video');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.optInPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={`container text-center ${styles.heroContainer}`}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>企業 AI 工作流導入諮詢</span>
                    </div>
                    <h1 className={styles.mainTitle}>
                        你的事業，卡在哪裡？<br />
                        找到痛點，才能真正<span className="text-gradient-primary">解決問題</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        👉 選一個最符合你現況的痛點，解鎖 30 分鐘免費實戰教學 👇
                    </p>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="container">
                <div className={styles.tabsContainer}>
                    {tabData.map(tab => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                className={`${styles.tabBtn} ${activeTab === tab.id ? styles.activeTab : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <Icon size={24} className={styles.tabIcon} />
                                <span>{tab.title}</span>
                            </button>
                        )
                    })}
                </div>

                {/* Dynamic Content */}
                <div className={styles.dynamicContent}>
                    <div className={styles.contentGrid}>
                        <div className={styles.leftCol}>
                            <h2 className={styles.contentSubtitle}>{currentTab.subtitle}</h2>
                            <div className={styles.painPoints}>
                                {currentTab.painPoints.split('\n').map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>

                            {/* Roadmap */}
                            <div className={styles.roadmap}>
                                <h3 className={styles.roadmapTitle}>{currentTab.roadmapTitle}</h3>
                                <div className={styles.roadmapSteps}>
                                    {currentTab.roadmap.map((step, index) => (
                                        <div key={index} className={styles.step}>
                                            <div className={styles.stepNumber}>{index + 1}</div>
                                            <div className={styles.stepContent}>
                                                <h4>{step.title}</h4>
                                                <p>{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className={`${styles.step} ${styles.goalStep}`}>
                                        <div className={styles.goalIcon}><CheckCircle2 size={24} /></div>
                                        <div className={styles.stepContent}>
                                            <h4>🏆 終極轉變</h4>
                                            <p>{currentTab.goal}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.rightCol}>
                            {/* Form Card */}
                            <Card hover className={styles.formCard}>
                                <div className={styles.formBadge}>
                                    <PlayCircle size={16} /> 即將開始
                                </div>
                                <h3 className={styles.formTitle}>🎁 免費報名觀看教學，加碼再送專屬實戰工具！</h3>
                                <p className={styles.formDesc}>
                                    這部精華教學影片，將完整拆解【Notion 中樞系統 × AI 自動化 × 流程梳理 × 遊戲化機制】四大核心。
                                    <br /><br />
                                    現在報名，立刻寄送一套我精心設計的<br /><strong>《標準化專案 Notion 模板》</strong>給你！
                                </p>

                                <div className={styles.mockupContainer}>
                                    <div className={styles.mockup}>
                                        <div className={styles.mockupHeader}>
                                            <span></span><span></span><span></span>
                                        </div>
                                        <div className={styles.mockupBody}>
                                            <div className={styles.mockupLine}></div>
                                            <div className={styles.mockupLine}></div>
                                            <div className={styles.mockupLine}></div>
                                        </div>
                                    </div>
                                    <div className={styles.freeTag}>FREE</div>
                                </div>

                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <Input
                                        placeholder="你的名字"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                    <Input
                                        type="email"
                                        placeholder="你的 Email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                    {error && (
                                        <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.5rem' }}>{error}</p>
                                    )}
                                    <Button type="submit" fullWidth size="lg" className="mt-8" disabled={isSubmitting}>
                                        {isSubmitting ? '送出中...' : '👉 立即免費索取教學影片與 Notion 模板！'}
                                    </Button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authority / Bio Section */}
            <section className="container">
                <div className={styles.authorityCard}>
                    <div className={styles.authorityLeft}>
                        <img src={raySalon} alt="Ray" className={styles.authorityAvatar} />
                        <div className={styles.authorityName}>Ray（Raytio）</div>
                        <div className={styles.authorityRole}>企業系統化顧問</div>
                    </div>
                    <div className={styles.authorityRight}>
                        <div className={styles.authorityLabel}>為什麼聽 Ray 說？</div>
                        <h3 className={styles.authorityHeadline}>
                            我不是教軟體的人。<br />
                            我是真的把公司搞垮過、又重建起來的人。
                        </h3>
                        <div className={styles.authorityCredentials}>
                            <div className={styles.credential}>
                                <CheckCircle2 size={18} className={styles.credIcon} />
                                <span>接手家族營造廠，從零建立完整數位管理與 SOP 系統</span>
                            </div>
                            <div className={styles.credential}>
                                <CheckCircle2 size={18} className={styles.credIcon} />
                                <span>已協助營造、製造、餐飲、接案等多產業企業主導入 AI 工作流</span>
                            </div>
                            <div className={styles.credential}>
                                <CheckCircle2 size={18} className={styles.credIcon} />
                                <span>獨創【系統化擴張 4 步驟】，讓企業從混亂走向可複製運轉</span>
                            </div>
                            <div className={styles.credential}>
                                <CheckCircle2 size={18} className={styles.credIcon} />
                                <span>同時經營顧問、餐飲品牌、外籍人士生活服務，親身實踐多元事業系統化</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className={`container text-center ${styles.socialProof}`}>
                <p>無論你是上述哪個痛點，本質都是同一個問題：你的事業正在依賴「你的肝」或少數「明星員工」的記憶在運轉。</p>
                <p className={styles.highlight}>你缺的不是更拼命工作，而是一套<strong>讓人、流程、資料都能自動運轉的「企業中樞系統」</strong>。</p>
            </section>
        </div>
    );
};
