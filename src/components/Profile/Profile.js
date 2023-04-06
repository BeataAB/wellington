import React from "react";
import STYLES from './Profile.module.css';

export function Profile() {
    const handleClick = (imageURL, description) => {
        const gallery = document.getElementById("gallery");
        gallery.style.display = "flex";
        const galleryImg = document.getElementById("image");
        galleryImg.setAttribute("src", imageURL);
        galleryImg.setAttribute("alt", description);
        console.log("Image clicked");
        console.log(imageURL);
    }
    const closeGallery = () => {
        const gallery = document.getElementById("gallery");
        gallery.style.display = "none";
    }
    return (
        <div>
            <h1>Wellie Belly 🙂</h1>
            <div>
                <img src="./images/20220923_144042.jpg" alt="Wellinton on the beach" height="400" />
            </div>
            <p>Wellington arrived to our household on the 21st August 2021, a rescue from 'Happy Spanish Tails Charity'.</p>
            <p>Rescuing a dog is always a daunting experience, there is little know as to the dogs background and behaviour. We have embarked on this journey with open heart and mind and even though it was challenging at times we wouldn't change it, we absolutely fell in love with this beautiful guy!</p>
            <p>Wellie is a very affectionate dog, his facial expressions and noises convey his happiness, playfulness and discontent when a treat pouch is getting closed.</p>
            <h2>Favourite activities</h2>
            <ul>
                <li>Wellie is obsessed with fetch, balls are his favourite toys!</li>
                <li>He loves running on the beach and digging in the sand.</li>
                <li>Never says no to snuggles and cuddles.</li>
                <li>Enjoys playing hide and seek with some treats or fregnant toys.</li>
                <li>Breakfast and dinner are the most important events in his life, if he could, he would inhale his food, thank goodness somebody came up with a slow-feeding bowl.</li>
            </ul>
            <div className={STYLES.link}>
                <a href="/breed/" aria-label="Breed description of a Toller.">Breed information</a>
            </div>
            <div className={STYLES.gallery}>
                <img src="./images/20211024_124216.jpg" alt="Wellington chased by other dogs" height="200" onClick={() => handleClick("./images/20211024_124216.jpg", "Wellington chased by other dogs")} />
                <img src="./images/20211024_125449.jpg" alt="Wellington with his toys, staring at a ball" height="200" onClick={() => handleClick("./images/20211024_125449.jpg", "Wellington with his toys, staring at a ball")} />
                <img src="./images/20220501_151425.jpg" alt="Wellington inside his kennel" height="200" onClick={() => handleClick("./images/20220501_151425.jpg", "Wellington inside his kennel")} />
                <img src="./images/20220731_140422.jpg" alt="Wellington playing and jumping in the park" height="200" onClick={() => handleClick("./images/20220731_140422.jpg", "Wellington playing and jumping in the park")} />
                <img src="./images/20220924_125345.jpg" alt="Wellington admiring highland landscape" height="200" onClick={() => handleClick("./images/20220924_125345.jpg", "Wellington admiring highland landscape")} />
                <img src="./images/20230128_151106.jpg" alt="Wellington poseing on a rocky beach" height="200" onClick={() => handleClick("./images/20230128_151106.jpg", "Wellington poseing on a rocky beach")} />
            </div>
            <div id="gallery" className={STYLES.popup}>
                <img className={STYLES['gallery-content']} alt="" id="image" onClick={closeGallery}/>
            </div>
        </div>
    )
}

