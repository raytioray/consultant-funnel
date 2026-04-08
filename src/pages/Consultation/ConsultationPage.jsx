import React, { useState, useEffect } from 'react';
import {
    CheckCircle2, XCircle, ChevronDown,
    Settings, Users, Clock, Database, UserCheck, Flame
} from 'lucide-react';
import rayProfile from '../../assets/個人IP圖貼.png';
import { Card } from '../../components/Card/Card';
import styles from './ConsultationPage.module.css';

const faqs = [
    {
        q: '這場諮詢真的免費嗎？會有推銷壓力嗎？',
        a: '是的，這 45 分鐘的健檢完全免費。我們會在最後 10 分鐘，如果你覺得我們的方向契合，才會跟你介紹我們進階的「客製化系統建置/陪跑服務」。如果不適合，你依然可以帶走滿滿的優化建議離開。'
    },
    {
        q: '我們公司已經有 ERP 或其他軟體了，還需要 Notion 嗎？',
        a: 'Notion 最大的優勢是極度的「高彈性」與「整合性」。它可以是取代你目前散亂文件的地方，也可以成為串接你現有軟體的中樞。這正是我們要在諮詢中幫你釐清的。'
    },
    {
        q: '我完全不懂 AI 和軟體，適合預約嗎？',
        a: '非常適合！我們的專長就是把複雜的系統技術，轉化為「員工一學就會」的防呆操作介面。你不需要懂寫程式，你只需要懂你的事業就好。'
    }
];

export const ConsultationPage = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        if (openFaq === index) setOpenFaq(null);
        else setOpenFaq(index);
    };

    useEffect(() => {
        const w = 'https://tally.so/widgets/embed.js';
        if (document.querySelector(`script[src="${w}"]`)) {
            if (window.Tally) window.Tally.loadEmbeds();
            return;
        }
        const s = document.createElement('script');
        s.src = w;
        s.onload = () => window.Tally && window.Tally.loadEmbeds();
        document.body.appendChild(s);
    }, []);

    return (
        <div className={styles.consultationPage}>

            {/* 1. AWARENESS (Hero) */}
            <section className={`container text-center ${styles.heroSection}`}>
                <div className={styles.heroBadge}>限量名額開放中</div>
                <h1 className={styles.heroTitle}>
                    不再被混亂的流程綁架！<br />一套專屬的<span className="text-gradient-primary">「Notion 企業大腦 × 自動化系統」</span>，幫你找回利潤、穩住品質，讓事業真正「可複製、可擴張」！
                </h1>
                <p className={styles.heroSubtitle}>
                    過去我們已經實際協助眾多營造業、製造業、接案者與餐飲品牌，深知該如何根據你的商業模式，結合目前最強大的【Notion 中樞系統 × AI 自動化 × 流程梳理】，提供真正客製化的營運升級建議。許多客戶在採納並建置系統後，短短幾週內就省下大量溝通成本，甚至透過「遊戲化機制」讓顧客黏著度大幅成長！
                </p>

            </section>

            {/* 2. INTEREST (Pain points) */}
            <section className={styles.darkSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>
                        你是不是也正困在這些「無效忙碌」的迴圈中？
                    </h2>
                    <p className="text-center mb-8" style={{ color: 'var(--text-secondary)' }}>
                        作為一個企業主或創業者，你可能正經歷著：
                    </p>

                    <div className={styles.painGrid}>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}><Settings size={28} /></div>
                            <h3>【SOP 形同虛設】</h3>
                            <p>明明教過很多次，但員工每次產出的品質還是不一樣，最後常常要你親自下來擦屁股？</p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}><Database size={28} /></div>
                            <h3>【資料黑洞】</h3>
                            <p>公司重要的客戶名單、合約和檔案，全散落在私人的 LINE 群組、Google Drive、甚至實體講義裡，要用的時候永遠找不到？</p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}><Users size={28} /></div>
                            <h3>【擴張遇到天花板】</h3>
                            <p>想要接更多案子或開分店，但內部流程混亂不堪，根本不敢擴大團隊，深怕一擴張就崩盤？</p>
                        </div>
                        <div className={styles.painCard}>
                            <div className={styles.painIcon}><Clock size={28} /></div>
                            <h3>【留客率低迷】</h3>
                            <p>新客人花大筆廣告費找來了，但因為服務流程不穩定，或是缺乏讓他們持續互動的理由，回頭率少得可憐？</p>
                        </div>
                    </div>

                    <div className={styles.painConclusion}>
                        <strong>如果不正視這些問題，你的事業永遠只能依賴「你的肝」或少數「明星員工」的記憶在運轉。</strong>
                        <br />這不叫經營事業，這只是一份高壓又很累的工作。
                    </div>
                </div>
            </section>

            {/* 2.5 AUTHORITY (Ray's Credibility) */}
            <section className={styles.credSection}>
                <div className="container">
                    <div className={styles.credGrid}>
                        <div className={styles.credLeft}>
                            <div className={styles.credAvatar}>
                                <img src={rayProfile} alt="Ray" />
                            </div>
                            <div className={styles.credName}>Ray（Raytio）</div>
                            <div className={styles.credRole}>企業系統化顧問</div>
                        </div>
                        <div className={styles.credRight}>
                            <div className={styles.credLabel}>關於 Ray</div>
                            <h2 className={styles.credHeadline}>
                                我不是教軟體的人。<br />
                                我是真的把公司搞垮過、又重建起來的人。
                            </h2>
                            <div className={styles.credStory}>
                                <p>
                                    我爸出意外那年，他整整一年沒辦法行動，家裡的營造廠全卡住。我回去，接下來。
                                    白天在工地現場，晚上回辦公室算計價、跑請款。
                                    回到家才發現，整間公司都沒有系統、SOP。
                                </p>
                                <p>
                                    那段時間我一直問自己一個問題：
                                </p>
                                <div className={styles.credQuote}>
                                    「哪天我不在，公司還能不能跑？」
                                </div>
                                <p>
                                    所以我把流程全部打掉重來。不是為了炫耀技術，
                                    而是因為我真的需要把時間從自己身上解放出來。
                                </p>
                                <p>
                                    現在我用同一套方法，協助其他企業做系統化。
                                    不只是導入 Notion，而是先盤點卡住的 SOP 和流程邏輯，
                                    再做成一套真的用得下去的管理系統。
                                    目前已有來自不同產業的企業主在使用，持續收集真實回饋優化中。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. DESIRE (Methodology & Authority) */}
            <section className="container" style={{ padding: '6rem 1.5rem' }}>
                <div className={styles.twoCol}>
                    <div>
                        <h2 className={styles.highlightTitle}>
                            我們不是教你用軟體<br />
                            我們是在幫你「打造企業的第二大腦」。
                        </h2>
                        <p className={styles.methodologyDesc}>
                            坊間有很多 Notion 教學或 AI 課程，但那都是「片段的工具」。我們獨創的<strong>【系統化擴張 4 步驟】</strong>，是從商業本質出發的解法：
                        </p>

                        <div className={styles.methodSteps}>
                            <div className={styles.mStep}>
                                <div className={styles.mStepNum}>1</div>
                                <div>
                                    <h4>【流程解構 SOP】</h4>
                                    <p>梳理從接觸客戶到結案的所有斷點，設計出防呆的標準作業流程。</p>
                                </div>
                            </div>
                            <div className={styles.mStep}>
                                <div className={styles.mStepNum}>2</div>
                                <div>
                                    <h4>【Notion 企業中樞】</h4>
                                    <p>捨棄散落的工具，把所有 SOP、專案進度、龐雜數據，收攏進高度關聯的 Notion 系統中。</p>
                                </div>
                            </div>
                            <div className={styles.mStep}>
                                <div className={styles.mStepNum}>3</div>
                                <div>
                                    <h4>【遊戲化體驗設計】</h4>
                                    <p>把無聊的流程變成有趣的挑戰。（例如：協助餐廳設計會員任務、接案體驗設計），大幅增加黏著度。</p>
                                </div>
                            </div>
                            <div className={styles.mStep}>
                                <div className={styles.mStepNum}>4</div>
                                <div>
                                    <h4>【AI 自動化串接】</h4>
                                    <p>當資料庫結構完整後，我們將協助串接 AI（自動摘要、資料分類），讓系統從「資料庫」升級成「智能助理」。</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Card hover className={styles.whoIsItFor}>
                            <h3 className={styles.whoTitle}>這場免費深度健檢，適合誰？</h3>

                            <ul className={styles.whoList}>
                                <li>
                                    <UserCheck className={styles.whoIcon} />
                                    <div>
                                        <strong>營造、製造、中小企業：</strong>
                                        <span>急需建立內部 SOP 與規章，準備擴大團隊。</span>
                                    </div>
                                </li>
                                <li>
                                    <UserCheck className={styles.whoIcon} />
                                    <div>
                                        <strong>接案者與自由工作者：</strong>
                                        <span>渴望建立穩定的接案流程，讓顧客成為長期回頭客。</span>
                                    </div>
                                </li>
                                <li>
                                    <UserCheck className={styles.whoIcon} />
                                    <div>
                                        <strong>餐廳與服務業實體店：</strong>
                                        <span>想導入「遊戲化策略」提升顧客黏著度與趣味性。</span>
                                    </div>
                                </li>
                                <li>
                                    <UserCheck className={styles.whoIcon} />
                                    <div>
                                        <strong>資料密集型產業（法律/投資等）：</strong>
                                        <span>面臨海量資料管理困難，尋找能無縫導入 AI 的資料庫架構。</span>
                                    </div>
                                </li>
                            </ul>

                            <div className={styles.whoNot}>
                                <XCircle size={20} />
                                <span><strong>誰不適合？</strong> 不願意花時間梳理公司流程，只想要一款「裝了就會自動賺錢的神奇軟體」的人。</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* 4. ACTION (Urgency & CTA & FAQ) */}
            <section className={styles.glassSection}>
                <div className="container">
                    <div className={styles.actionGrid}>
                        <div className={styles.urgencyBox}>
                            <Flame size={24} className={styles.flameIcon} />
                            <div>
                                <h3>⚠️ 每月僅開放 5 位免費健檢名額</h3>
                                <p>為了確保在諮詢前能充分了解你的產業，並在諮詢時提供最高品質的戰略建議，我每個月僅能撥出有限的時間。一旦本月名額額滿，表單將強制關閉。</p>
                            </div>
                        </div>

                        <div className={styles.faqWrapper}>
                        <h3 className={styles.faqTitle}>常見問題</h3>
                            <div className={styles.faqList}>
                                {faqs.map((faq, idx) => (
                                    <div
                                        key={idx}
                                        className={`${styles.faqItem} ${openFaq === idx ? styles.faqOpen : ''}`}
                                        onClick={() => toggleFaq(idx)}
                                    >
                                        <div className={styles.faqQuestion}>
                                            <h4>{faq.q}</h4>
                                            <ChevronDown size={20} className={styles.faqChevron} />
                                        </div>
                                        <div className={styles.faqAnswer}>
                                            <p>{faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className={styles.ctaWrapper}>
                        <h2>這套系統適合你的事業嗎？</h2>
                        <p>填寫以下表單，送出後系統將自動帶你前往預約頁面，選擇你方便的時段。</p>

                        <iframe
                            data-tally-src="https://tally.so/embed/EkJKqL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="1425"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="預約免費諮詢"
                            style={{ borderRadius: '0.75rem', minHeight: '400px' }}
                        />
                    </div>
                </div>
            </section>

        </div>
    );
};
