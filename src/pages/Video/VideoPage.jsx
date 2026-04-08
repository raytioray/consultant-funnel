import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Gift, CalendarCheck, AlertTriangle } from 'lucide-react';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import styles from './VideoPage.module.css';

export const VideoPage = () => {
    const [showDelayedContent, setShowDelayedContent] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // 10 seconds delay logic for demonstration purposes (normally 10 mins)
        const timer = setTimeout(() => {
            setShowDelayedContent(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.videoPage}>
            {/* Title Section */}
            <section className={`container text-center ${styles.hero}`}>
                <h1 className={styles.title}>
                    打造專屬「企業大腦」！<br />
                    終結混亂，用 <span className="text-gradient">Notion × 超級工作流</span><br />讓你的事業自動化運轉
                </h1>
            </section>

            {/* Video Section */}
            <section className="container">
                <div className={styles.videoWrapper}>
                    <div className={styles.videoContainer}>
                        {/* Placeholder for Vimeo embed */}
                        <div className={styles.videoPlaceholder}>
                            <div className={styles.playButton}></div>
                            <p>（這裡放置 Vimeo 隱藏進度條影片）</p>
                        </div>
                    </div>
                </div>

                {/* Video Motivation */}
                <div className={styles.motivationWrapper}>
                    <Card className={styles.motivationCard}>
                        <div className={styles.alertHeader}>
                            <AlertTriangle className={styles.alertIcon} />
                            <h3>觀看前請注意：這不是一部普通的軟體操作教學。</h3>
                        </div>

                        <p>這部影片濃縮了我協助無數企業、接案者與餐廳，從「混亂憑感覺」到「建立可複製營運架構」的實戰精華。</p>

                        <p className={styles.motivationLabel}>我將在影片中為你拆解：</p>
                        <ul className={styles.motivationList}>
                            <li>為何 90% 的企業導入系統會失敗？（你可能正在犯這個錯）</li>
                            <li>如何正確使用 Notion，打造不依賴個人記憶的「企業中樞大腦」。</li>
                            <li>讓產出品質穩如泰山，甚至讓客戶黏著度翻倍的「獨家遊戲化防呆工作流」。</li>
                        </ul>

                        <div className={styles.highlightBox}>
                            <strong>為了把最核心的資源，交給「真正準備好改變現況」的人，我在影片的第 10 分鐘，為你準備了一份獨家驚喜。</strong>
                            <p>請幫自己一個忙，關掉其他網頁分頁，給自己 30 分鐘，這部影片絕對會改變你接下來的事業經營軌跡。</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Time-Delayed Content */}
            <div className={`${styles.delayedContent} ${showDelayedContent ? styles.visible : ''}`}>
                <section className={`container ${styles.delayedSection}`}>
                    <div className={styles.delayedGrid}>

                        {/* Limited Time Offer Banner */}
                        <Card className={styles.limitedOfferCard}>
                            <div className={styles.offerHeader}>
                                <span className={styles.offerBadge}>🎁 限時優惠</span>
                                <h3>諮詢後 3 天內，免費獲得 $8,400 的完整診斷方案！</h3>
                            </div>

                            <p className={styles.offerSubtitle}>完成諮詢後，在 Threads 上 tag Ray（<a href="https://www.threads.com/@raytio.ray" target="_blank" rel="noopener noreferrer">@raytio.ray</a>）並留言分享你的想法，即可免費獲得：</p>

                            <div className={styles.offersGrid}>
                                <div className={styles.offerItem}>
                                    <div className={styles.offerCheckmark}>✓</div>
                                    <div>
                                        <h4>7日快速行動清單</h4>
                                        <p className={styles.offerPrice}>原價 $2,600</p>
                                    </div>
                                </div>
                                <div className={styles.offerItem}>
                                    <div className={styles.offerCheckmark}>✓</div>
                                    <div>
                                        <h4>診斷報告書</h4>
                                        <p className={styles.offerPrice}>原價 $2,800</p>
                                    </div>
                                </div>
                                <div className={styles.offerItem}>
                                    <div className={styles.offerCheckmark}>✓</div>
                                    <div>
                                        <h4>系統架構初步草圖</h4>
                                        <p className={styles.offerPrice}>原價 $3,000</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.offerFooter}>
                                <strong>總價值 $8,400 免費送！</strong>
                                <p>（僅限預約後 3 天內在 Threads 留言有效）</p>
                            </div>
                        </Card>

                        {/* Gift Download Area */}
                        <Card hover className={styles.giftCard}>
                            <div className={styles.giftIconWrapper}>
                                <Gift size={32} className={styles.giftIcon} />
                            </div>
                            <h3 className={styles.giftTitle}>🎁 你的專屬承諾禮物已解鎖</h3>
                            <p className={styles.giftDesc}>
                                感謝你的專注！如約定，這是為你準備的<strong>《標準化專案 Notion 模板》</strong>。
                                你可以點擊下方按鈕立即下載並複製到你的 Notion 工作區。
                            </p>

                            <Button fullWidth variant="outline" className={styles.giftBtn}
                                onClick={() => window.open('https://raytio.notion.site/33cf86fa9f3480b09384efaa64eed923', '_blank')}>
                                👉 立即領取《標準化專案 Notion 模板》
                            </Button>

                            <div className={styles.giftWarning}>
                                <strong>👉 強烈建議：</strong> 模板只是工具，真正的核心在於「如何把你的商業邏輯無縫植入這個系統」。請務必繼續看完影片後半段，我將示範最正確的套用邏輯，否則它就只是一個普通的表格而已。
                            </div>
                        </Card>

                        {/* Consultation CTA */}
                        <Card className={styles.ctaCard}>
                            <h3 className={styles.ctaTitle}>不想自己盲目摸索？讓我親自為你量身打造「專屬營運擴張藍圖」！</h3>
                            <p className={styles.ctaDesc}>
                                你剛剛在影片中看到的，是幫助企業脫離混亂、建立自動化運轉的底層邏輯。但每個企業遇到的卡關點都不一樣。
                            </p>

                            <p className={styles.ctaDesc}>
                                如果你希望能省下幾個月撞牆期，一次把系統建置到位，我目前開放了極少數的<strong>「一對一營運系統健檢諮詢」</strong>名額。
                            </p>

                            <div className={styles.fomoBox}>
                                <CalendarCheck className={styles.fomoIcon} />
                                <div>
                                    <strong>⚠️ 每月僅開放 5 位</strong>
                                    <p>如果這個月的名額已滿，表單將會自動關閉。如果下方的按鈕還能點擊，請立刻預約你理想的時間！</p>
                                </div>
                            </div>

                            <Button
                                fullWidth
                                size="lg"
                                onClick={() => navigate('/consultation')}
                                className={styles.ctaBtn}
                            >
                                👉 是的，我要預約一對一專屬營運健檢！
                            </Button>
                        </Card>

                    </div>
                </section>
            </div>
        </div>
    );
};
