import { React, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import styled from 'styled-components';
import { AiFillPhone, AiOutlineExclamationCircle } from "react-icons/ai";

export default function Home() {

  // メニューの開閉を制御するisMenuOpenをuseStateで設定
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggleMenuを実行時にisMenuOpenの状態を切り替える
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // ウインドウの横幅に応じてisMenuOpenを設定
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {  // PCの場合（768px以上）
        setIsMenuOpen(true); // 初期段階ではメニューを開く
      } else {  // モバイルの場合
        setIsMenuOpen(false); // 初期段階ではメニューを閉じる
      }
    };

    // 初期ロード時に一回だけチェック
    handleResize();

    // ウィンドウリサイズ時にもチェック
    window.addEventListener('resize', handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="fixed-background"></div>
      <div className="content-wrapper">
        <div className="content">

          {/* SEO対策のためのmetaタグ */}
          <Head>
            <title>サイトタイトル</title>
            <meta name="Description" content="サイト説明文" />
          </Head>

          {/* ヘッダー */}
          <header>
            <h1>サイトタイトル</h1>
            {/* メニューボタンをクリックすると開く */}
            <button onClick={toggleMenu} className="menuBtn">メニューボタン（仮）</button>
          </header>

          {/* グローバルナビゲーションメニュー */}
          <nav className="gnavi" style={{ display: isMenuOpen ? "block" : "none" }}>
            <button onClick={toggleMenu} className='closeBtn'>メニューを閉じる</button>
            <div>サイトメニュー</div>
            <ul>
              {/* 内部リンク */}
              <li><Link href="./" >メニュー１</Link></li>
              <li><Link href="./" >メニュー２</Link></li>
              <li><Link href="./" >メニュー３</Link></li>
              <li><Link href="./" >メニュー４</Link></li>
              <li><Link href="./" >メニュー５</Link></li>
              {/* 外部リンク：新しいタブで開く&"noopener noreferrer" */}
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">メニュー6</a></li>
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">メニュー7</a></li>
              <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">メニュー8</a></li>
            </ul>
          </nav>

          {/* メイン */}
          <main>
            メインコンテンツ
            <Image
              src="/image/futa.jpg" // 画像のパス（必須）
              alt="Description" // 代替テキスト（必須）
              width={500} // 画像の幅（必須）
              height={300} // 画像の高さ（必須）
              quality={90} // 画像の品質（1-100）
              objectFit="cover" // 画像のオブジェクトフィット（'fill', 'contain', 'cover', 'none', 'scale-down'）
              layout="responsive"
            />

            <div className="bg-blue-500 text-white p-4 rounded w-[100px]">
              ボタン
            </div>
            <section>
              <h2>セクション1</h2>
              <p>本文</p>
            </section>
            <section>
              <h2>セクション2</h2>
              <p>本文</p>
            </section>
            <section>
              <h2>セクション3</h2>
              <p>本文</p>
            </section>
            <AiFillPhone />
            <AiOutlineExclamationCircle />
          </main>

          {/* フッター */}
          <footer>
            <p>会社情報</p>
            <p>利用規約</p>
            <p>プライバシーポリシー</p>
            <p>特定商取引法に基づく表記</p>
            {/* コンテナスタイルを適用 */}
          </footer>

          <div className="copyright">
            <p>© 2023 futa</p>
          </div>

        </div>
      </div>
    </>
  );
};
