import React from "react";
import STYLES from './Breed.module.css';

export function Breed() {
    return (
        <div>
            <div className={STYLES.link}>
                <a href="/" aria-label="Go back to Wellington's profile.">Back</a>
            </div>
            <h1>Nova Scotia Duck Tolling Retriever - Introduction</h1>
            <p>The Nova Scotia Duck Tolling Retriever is a medium-sized gundog bred primarily for hunting. It is often referred to as a "toller". It is the smallest of the retrievers, and is often mistaken for a small Golden Retriever.</p>
            <p>The name "toller" is derived from their ability to lure waterfowl within gunshot range. The breed originated in Yarmouth County, Nova Scotia, Canada.</p>
            <p>Tollers are eager to please, alert, and energetic, they are a great choice for people who lead active outdoor lives because these intelligent dogs love nothing more than to be out and about having an abundant amount of energy they need to expend. They are not the best choice for first time dog owners although they do make wonderful family pets being especially good around children.</p>
            <h2 className={STYLES.title}>Toller - Appearance</h2>
            <p><span>Height:</span> Males 48 - 51 cm Females 45 - 48 cm</p>
            <p><span>Average weight:</span> Males 20 - 23 kg Females 17 - 20 kg</p>
            <p><span>Coat:</span> Double coat that's made up of a straight weather resistant topcoat and a softer much denser undercoat. Their coats can have a slight wave on a dog's back and feathering around the throat behind the ears and on the back of the thighs with front legs there’s a moderate amount of feathering.</p>
            <p><span>Colour:</span> Varying shades of red or orange, with white on the chest, feet, and on top of the nose.</p>
            <p><span>Lifespan:</span> 12 to 14 years</p>
            <h2 className={STYLES.title}>Toller - Temperament</h2>
            <p>Nova Scotia Duck Tolling Retrievers are known to be very intelligent, curious, alert, outgoing, and high-energy dogs. They are affectionate, eager to please, busy, and get along well with children. They are good family dogs, however during the decision process potential owners should be wary of the physical and mental commitment that is required in order to keep a Toller busy. Physical stimulation should be provided for these dogs each day since they may become destructive when they are not exercised enough or are left alone for long periods of time.</p>
            <p>Duck Tollers are working animals and are happiest when they have a job to do. Tollers are excellent hunting companions. They excel at many types of sporting competitions such as agility, dock diving, and obedience. Their keen sense of smell, intelligence, drive for work, and small size make them perfect search and rescue dogs. The breed standard states that the dog should have a strong retrieving drive, intense birdiness, endurance, and a love for water.</p>
            <p>Tollers do not have an aggressive bark. Some have a unique sounding bark known as the "Toller scream", a high-pitched howl-like sound which is often referred to as their "singing". They do not use this in violent situations, rather; the "toller scream" is expressed when they are excited.</p>
        </div>
    )
}