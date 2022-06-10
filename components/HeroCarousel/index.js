import React from "react";
import styles from "./HeroCarousel.module.scss";
import Image from 'next/image'

const HeroCarousel = ({ image }) => {

    switch (image) {
        case 1:
            return <>
                <div className={styles["homeContainer"]}>
                    <Image src="/Hero1.png" width={294} height={548} layout={"intrinsic"} className={styles["PhonePositioning"]} />
                    <div id={styles["paragraph3"]}>Send & Receive Tokens</div>
                </div>
            </>
        case 2:
            return <>
                <div className={styles["homeContainer"]}>
                    <Image src="/Hero2.png" width={294} height={548} layout={"intrinsic"} className={styles["PhonePositioning"]} />
                    <div id={styles["paragraph3"]}>Multiple accounts</div>
                </div>
            </>
        case 3:
            return <>
                <div className={styles["homeContainer"]}>
                    <Image src="/Hero3.png" width={294} height={548} layout={"intrinsic"} className={styles["PhonePositioning"]} />
                    <div id={styles["paragraph3"]}>Send invoices in chat</div>
                </div>
            </>
        default:
            return <>
                <div className={styles["homeContainer"]}>
                    <Image src="/Hero1.png" width={294} height={548} layout={"intrinsic"} className={styles["PhonePositioning"]} />
                    <div id={styles["paragraph3"]}>Smoothest experience</div>
                </div>
            </>
    }
};

export default HeroCarousel;