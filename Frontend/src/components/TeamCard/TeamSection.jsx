import React from "react";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  const teams = [
    {
      name: "Lindsay",
      img: "https://pinchofyum.com/wp-content/assets/images/about/Lindsay-384x384.jpg",
      description:
        "Lindsay is the voice, author, and creator behind Pinch of Yum. She develops recipes and writes content for the blog and on Instagram. The little blog that started as her casual hobby for nights and weekends while working as a teacher has now grown into a full-fledged business. She lives in Minnesota with her husband Bjork, dog Sage, and daughter Solvi.",
    },
    {
      name: "Bjork",
      img: "https://pinchofyum.com/wp-content/assets/images/about/Bjork-384x384.jpg",
      description:
        "Bjork is the chief tech consultant / business advisor / taste tester at Pinch of Yum. Day-to-day, you’ll mostly see him around Food Blogger Pro, as well as hosting the Food Blogger Pro podcast. Bjork is also husband to Lindsay, dad to Solvi, and lives in Minnesota with their dog Sage. He can usually be found with a coffee in hand.",
    },
    {
      name: "Jenna",
      img: "https://pinchofyum.com/wp-content/assets/images/about/Jenna-384x384.jpg",
      description:
        "Jenna is the Communications Manager at Pinch of Yum. She manages much of the day-to-day communication with readers and brands – on and off the blog. You can find her answering recipe questions on posts, helping readers with ebook purchases, coordinating partnership details with brands, and other various behind-the-scenes projects. Jenna lives in Minnesota with her husband.",
    },
    {
      name: "Krista",
      img: "https://pinchofyum.com/wp-content/assets/images/about/Krista-384x384.jpg",
      description:
        "Krista is the Shoot Assistant at Pinch of Yum. You’ll find her in the kitchen supporting Lindsay on shoot days, prepping and cooking recipes for the blog. She is also the resident recipe tester, who tests and re-tests many recipes to ensure the best cooking experience. Krista lives in Minnesota with her husband and 3 children. She also enjoys food photography and managing her blog Destination Delish.",
    },
  ];

  return (
    <div>
      <div className="teams-container">
            {teams.map(team => <TeamCard key={team.name} team={team} />)}
      </div>
    </div>
  );
};

export default TeamSection;
