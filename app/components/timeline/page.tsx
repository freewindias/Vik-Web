// components/Timeline.js

import React from "react";
import styles from "./timeline.module.css";
import Image from "next/image";

interface Event {
  image: string;
  title: string;
  description: string;
  location: string;
  year: string;
}

const Timeline = ({ events }: { events: Event[] }) => {
  return (
    <div className={styles.timeline}>
      {events.map((event, index) => (
        <div
          key={index}
          className={`${styles.container} ${index % 2 == 0 ? styles.left : styles.right}`}
        >
          <div className={styles.content}>
            <Image
              width={640}
              height={480}
              src={event.image}
              alt={event.title}
              className={styles.image}
            />
            <h2 className={styles.title}>{event.title}</h2>
            <p className={styles.description}>{event.description}</p>
            <p className={styles.location}>{event.location}</p>
          </div>
          <div
            className={`${styles.year} ${index % 2 == 0 ? styles.yleft : styles.yright}`}
          >
            {event.year}
          </div>
        </div>
      ))}
      <div className={styles.lyear}>More Soon</div>
    </div>
  );
};

export default Timeline;
