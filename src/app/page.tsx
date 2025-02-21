import { Card } from "@/components/Card";
import styles from "./index.module.scss";
import { BuildingLibraryIcon, UserIcon, MapPinIcon, BookOpenIcon } from "@heroicons/react/24/outline";

const apiList = [
  {
    title: "句碑",
    description: "建立された場所、俳句の作者、句の内容などの情報を取得することができます",
    href: "",
    item: BuildingLibraryIcon,
  },
  {
    title: "俳人",
    description: "句碑に刻まれた俳句から、俳人の情報を取得することができます",
    href: "",
    item: UserIcon,
  },
  {
    title: "設置場所",
    description: "句碑の設置場所の情報を取得することができます",
    href: "",
    item: MapPinIcon,
  },
  {
    title: "出典",
    description: "句碑の出典情報を取得することができます",
    href: "",
    item: BookOpenIcon,
  }
];

export default function Home() {
  return (
    <div className={styles.layout}>
      <section className={styles.section__pagetitle}>
        <div className={styles.section__pagetitle__inner}>
          <h1 className={styles.section__pagetitle__title}>HaikuMonument API Documentation</h1>
          <small className={styles.section__pagetitle__subtitle}>句碑API ドキュメント</small>
        </div>
      </section>
      <div className={styles.border} />
      <section id="overview" className={styles.section__overview}>
        <div className={styles.section__overview__inner}>
          <h2 className={styles.section__overview__title}>Overview</h2>
          <small className={styles.section__overview__subtitle}>概要</small>
          <p className={styles.section__overview__description}>
            このAPIは、句碑の情報を提供します
            <br />
            以下の情報を取得することができます
          </p>
          <p className={styles.section__overview__destructive}>※ 現在制作中です</p>
        </div> 
        <div className={styles.section__overview__content}>
          <ul className={styles.section__overview__list}>
            {apiList.map((item) => (
              <li key={item.title} className={styles.section__overview__item}>
                <Card
                  title={item.title}
                  description={item.description}
                  href={""}
                  icon={item.item}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className={styles.border} />
      <section  className={styles.section__reference} id="reference">
        <div className={styles.section__reference__inner}>
          <h2 className={styles.section__reference__title}>API Reference</h2>
          <p>APIリファレンス</p>
        </div>
      </section>
    </div>
  );
}
