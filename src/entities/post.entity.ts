import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { Tag } from './tag.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    content: string;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @ManyToMany(() => Tag, tag => tag.posts)
    @JoinTable()
    tags: Tag[];
}
