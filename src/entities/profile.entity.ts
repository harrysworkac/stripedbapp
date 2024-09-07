import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bio: string;

    @Column()
    avatarUrl: string;

    @Column()
    website: string;

    @Column()
    location: string;

    @OneToOne(() => User, user => user.profile)
    user: User;
}
