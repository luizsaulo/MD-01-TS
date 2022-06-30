import React from 'react'
import styles from './Avatar.module.css';

interface AvatarProps {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export default function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
    
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt={alt} />

  )
}
