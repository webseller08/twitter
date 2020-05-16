DROP DATABASE IF EXISTS Twitter_clone;
CREATE DATABASE Twitter_clone;
USE Twitter_clone;
CREATE TABLE Users
(
    user_id int NOT NULL
    auto_increment primary key,
username VARCHAR
    (50) NOT NULL UNIQUE,
fullname VARCHAR
    (50) NOT NULL,
account_Type VARCHAR
    (50) NOT NULL,
password VARCHAR
    (50) NOT NULL,
description VARCHAR
    (256)
);
    CREATE TABLE Tweet
    (
        tweet_id int NOT NULL
        auto_increment primary key,
user_id int,
timeStamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
tweetText VARCHAR
        (280) NOT NULL,
foreign key
        (user_id) references Users
        (user_id));


        CREATE TABLE Retweet
        (
            ret_id int NOT NULL
            auto_increment primary key,
user_id int,
tweet_id int,
timeStamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
foreign key
            (user_id) references Users
            (user_id),
foreign key
            (tweet_id) REFERENCES Tweet
            (tweet_id));
            CREATE TABLE Likes
            (
                like_id int NOT NULL
                auto_increment primary key,
user_id INT,
tweet_id INT,
timeStamp TIMESTAMP
                (2) NOT NULL,
foreign key
                (user_id) references Users
                (user_id),
foreign key
                (tweet_id) references Tweet
                (tweet_id));
                CREATE TABLE HashTag
                (
                    ht_id int NOT NULL
                    auto_increment primary key,
hashtag VARCHAR
                    (50)
);
                    CREATE TABLE HashTagCollection
                    (
                        htc_id int NOT NULL
                        auto_increment primary key,
hashTag_id INT,
tweet_id INT,
foreign key
                        (hashTag_id) references HashTag
                        (ht_id),
foreign key
                        (tweet_id) references Tweet
                        (tweet_id));
                        CREATE TABLE Comment
                        (
                            com_id int NOT NULL
                            auto_increment primary key,
user_id int,
tweet_id INT,
text VARCHAR
                            (280) NOT NULL,
time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
foreign key
                            (user_id) references Users
                            (user_id),
foreign key
                            (tweet_id) references Tweet
                            (tweet_id));
                            CREATE TABLE Follower
                            (
                                follower_id int NOT NULL
                                auto_increment primary key,
follower_user_id INT,
following_user_id INT,
foreign key
                                (follower_user_id) references Users
                                (user_id),
foreign key
                                (following_user_id) references Users
                                (user_id));
                                CREATE TABLE Conversations
                                (
                                    c_id int NOT NULL
                                    auto_increment primary key,
user_one INT,
user_two INT,
foreign key
                                    (user_one) references Users
                                    (user_id),
foreign key
                                    (user_two ) references Users
                                    (user_id));
                                    CREATE TABLE Message
                                    (
                                        message_id int NOT NULL
                                        auto_increment primary key,
text VARCHAR
                                        (200) NOT NULL,
time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
sender_id INT,
receiver_id INT,
c_id INT,
foreign key
                                        (sender_id ) references Users
                                        (user_id),
foreign key
                                        (receiver_id) references Users
                                        (user_id),
foreign key
                                        (c_id) references Conversations
                                        (c_id));

