// pages/Chapters.js
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ChevronDown, ChevronUp } from "lucide-react";

gsap.registerPlugin(useGSAP);

function Entry({ entry, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      `.entry-${index}`,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: index * 0.1, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    }
  };

  return (
    <div className={`entry-${index} mb-8 bg-white rounded-xl shadow-md`}>
      <button
        onClick={toggle}
        className="w-full text-left px-6 py-4 flex justify-between items-center border-b border-gray-200 bg-blue-50 rounded-t-xl"
      >
        <h2 className="text-lg font-semibold text-blue-800">
          {entry.date} - {entry.readingAssignment}
        </h2>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>

      <div
        ref={contentRef}
        className={`overflow-hidden transition-all px-6 py-5 space-y-4 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {/* Compact metadata grid */}
        <div className="grid grid-cols-2 gap-y-1 gap-x-6 text-sm text-gray-600">
          <p><span className="font-semibold">Date:</span> {entry.date}</p>
          <p><span className="font-semibold">Skill:</span> {entry.skill}</p>
          <p><span className="font-semibold">Setting:</span> {entry.context}</p>
          <p><span className="font-semibold">Passage:</span> {entry.passage}</p>
          <p><span className="font-semibold">Prompt:</span> {entry.prompt}</p>
        </div>

        {/* Main text */}
        <div className="pt-4 border-t border-gray-200">
          <div
            className="text-gray-800 leading-relaxed text-base"
            dangerouslySetInnerHTML={{ __html: entry.response }}
          />

          {entry.supplemental && (
            <div className="mt-4 text-gray-800 leading-relaxed text-base">
              <span className="font-semibold">Supplemental Tool Documentation & Reflection:</span> {entry.supplemental}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Chapters() {
  const container = useRef();

  useGSAP(() => {
    gsap.fromTo(
      container.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, { scope: container });

  const entries = [
    {
      readingAssignment: `“Into the Wild”, Jon Krakauer`,
      date: "September 12th, 2024",
      context: "I read this passage when training for crew season over the summer.",
      skill: "Text-to-Self/-World Connection",
      passage: " “The core of mans' spirit comes from new experiences.” (Into the Wild)",
      prompt: "Describe how the passage connects to your life.",
      response:
        "This passage immediately resonated with me. It talks about how new experiences shape who someone is, and how trying new things pushes you out of your comfort zone. As someone who tries to experience as many things as possible, I could immediately relate to what Jon Krakauer was writing about. This passage connects to me so well because one of my core beliefs, almost to the point of being a motto, is “Don’t be afraid to try new things”. Trying different things than what you’re used to not only pushes you outside of your comfort zone, but also enables you to create new passions and interests. This happened to me super recently when my mom suggested that I do rowing this school year. I was scared at first because of the hard workouts and discipline required. I almost quit before the season even started because I felt like I wasn’t up for it and didn’t have what it took to be a crew athlete. But picking myself back up gave me the confidence to keep going and pursue what pushed me out of my comfort zone. Cut to today, I’m proudly a member of the crew team and I have the confidence to push myself even when the going gets tough.",
      supplemental: "N/A",
    },
    {
      readingAssignment: `“Girl”, Jamaica Kincaid`,
      date: "September 28th, 2024",
      context: "I read this passage on Saturday because I wanted to complete my work two days before it was due.",
      skill: "Text-To-Text Connections",
      passage: "The entire story",
      prompt: "What details in the story indicate a specific setting or place? Make a list of these. How and why do you think these are relevant to the story?",
      response:
        "This story, made in 1983, is made up of a list of all the rules that every girl should follow to have a successful life separated by semicolons. It almost seems like it’s being told to a girl from the perspective of a mother. This text shocked me because I never realized that this is what was expected of women back in that time period. This text also reminded me of River Cross my Heart because I thought that this is similar to what was expected of Johnnie Mae in the book. It also reminded me of the passage about how Johnnie Mae talks about how mothers always have silly pieces of advice to offer. Although the advice in this story isn’t silly, it still reminded me of the book. Another thing that stuck out to me were the places in the story. In the story, it talks about now talking to the people on the dock, even if they ask for directions. This also reminded me of River Cross my Heart because the book is set in Georgetown, which is directly on the Potomac, and I wondered if Johnnie Mae was forbidden from going down to the docks there too.",
      supplemental: "N/A",
    },
    {
      readingAssignment: `“The Girl Who Raised Pigeons”, Edward P. Jones`,
      date: "September 28th, 2024",
      context: "I read this passage on Sunday in study hall, right after I got back from meeting with my parents.",
      skill: "Thematic Understanding",
      passage: "The entire story",
      prompt: "Explain how you believe the setting of Myrtle Street, and the surrounding Washington, DC neighborhood, shapes either Betsy Ann or Robert's experience throughout the story. What distinctions are made between the different areas of DC, and did you recognize any of these?",
      response:
        "“The Girl Who Raised Pigeons” tells the story of a girl named Betsy Ann who gets given two pigeons by Miles the barber. Betsy Ann lives on Myrtle Street, an area in Washington, DC that slowly over the course of the book gets more abandoned and run-down, eventually (though not shown in the story) getting demolished. Robert, the father, and Betsy Ann join Myrtle street in it’s heyday, when Betsy Ann is eight years old. That’s when they acquire their first pigeons, and those two quickly turn into a flock of around 10-16 pigeons. The start of the book tells how the pigeons set up a nest in the coop, and how according to Robert “The nest was the first solid indication that the pigeons would stay forever, would go but would always return” (12). That’s when the relationship between Betsy Ann and her father flourishes. Betsy Ann is slowly given more and more trust and is allowed to go off by herself sometimes. Meanwhile, there’s talk amongst the children of railroad tracks being built throughout the town. The first major event in the story starts when Betsy Ann shoplifts and her father takes away that freedom from her, instead forcing her to ride with him in his taxi. Eventually, she gains more of her independence back. Sadly, their neighborhood is close to being abandoned, with more and more people moving out each day. And one day in winter, the father walks out in the morning to do his daily routine of checking on the coop when he realizes that most of the pigeons have been killed in the night by a group of rats, and the two remaining pigeons fly off in fear. This symbolizes what happens to the nieghborhood, as Betsy Ann quickly finds herself the one of the only ones left on Myrtle Street, with their landlord even thinking about destroying their house. The story ends on a sad note, with the final passages talking about how much Betsy Ann misses her pigeons as she sees the final surviving pigeon from her coop for the last time. The entire story connects to Myrtle Street because throughout the book the condition of the street matches the relationship between Betsy Ann and her father and the state of her pigeons. As the street degrades, so too do the connections and trust between the father and his daughter. Although I wish the story could have ended on a happier note, this story was still beautiful and had a very moving plot.",
      supplemental: "N/A",
    },
    {
      readingAssignment: `"Woman Hollering Creek", Cisneros`,
      date: "September 28th, 2024",
      context: "I did this reading the week after I had 6 tests and quizzes, so I was pretty tired.",
      skill: "Text-to-Text Connections",
      passage: "“La Llorona calling to her. She is sure of it. Cleófilas sets the baby's Donald Duck blanket on the grass. Listens. The day sky turning to night. The baby pulling up fistfuls of grass and laughing. La Llorona. Wonders if something as quiet as this drives a woman to the darkness under the trees.” Pg. 7",
      prompt: "Do you know the myth of La Llorona? Do some research. What role do you think the myth plays in the story? Why did Cisneros include it?",
      response:
        "Woman Hollering Creek is a story about a woman named Cleófilas who was forced to marry a man named Juan Pedro. She moves to Texas to live with him and he ends up abusing her constantly by hitting her. She doesn’t feel good in the relationship and regrets ever marrying him. At one point, La Llorona is mentioned when she is sitting with her baby by the creek. La Llorona is a story about a woman who drowned her children when she discovered that her husband was cheating on her. Cleófilas says that she hears La Llorona calling out to her through the creek, and she falls even deeper into her feelings of helplessness and darkness, even to the point where she thinks that death might be her only escape from her abusive relationship. Luckily, she ends up going to the clinic and it’s discovered that she has many bruises over her body, and she is taken back to Mexico to her family by a woman who picks her up from her house, with the story ending happily. La Llorona is an important figure used in this book, and reading this story and understanding the grief she was in through the story of La Llorona made me feel horrible for all women that are put into situations like this, and I’m glad that this story ended happily.",
      supplemental: "N/A",
    },
    {
      readingAssignment: `Home Essay`,
      date: "December 12th, 2024",
      context: "N/A",
      skill: "N/A",
      passage: "N/A",
      prompt: "N/A",
      response:
        "Every time I was asked where I was from, whether it was on my first day of school or at summer camp, I never really knew how to answer. The truth was that unlike most other children, I had spent most of my early childhood moving from one new school to the next, year after year, up until 7th grade. I lived in so many different places—DC, California, Germany, California again, and then back here, I never really had a family home, or even a solid home, while growing up. Sure, I called the house that I stayed in for six months while we lived in germany “home”. But it, and all the other houses, never quite held the same personal connection to me that my grandparent’s house did. There was something special about being there that no other place seemed to have. When I went to boarding school in 7th grade, it also didn’t feel like home, no matter how many fun activities we did as a dorm or how much I hung out with my friends. The dorm rooms were nice, and the campus was great, but there was always something missing. Even though I was surrounded by people, it never felt the same as when I was with my family. That’s when I came to the conclusion that what made all the houses I lived in so special, and why my boarding school didn’t quite feel the same, was my family. It was the little things that made a house feel like home—like eating a delicious meal cooked by my Mom after a hard day at school, or relaxing on the couch late at night and watching a tv show with my dad. It was even the simple joy of playing dodgeball with my little brother, laughing and making memories. In those moments, no matter where we were, I realized that home was not just a place, but a feeling.Looking back on my childhood, I understand that my idea of home has always been tied to the people I love, not physical spaces. Whether I was in a small house in Germany or at a boarding school, it was my family who created the sense of belonging and comfort that defined my experiences. No matter where we were, the sense of togetherness we shared made every place we lived feel like home. It wasn’t about the walls around us, but about the connections we built and the love that we shared. I now realize that while I may not have had a traditional childhood of staying in one place, I was fortunate to carry my definition of 'home' wherever I went. Ultimately, I have come to see that home is not simply about a place—it’s about the people who make you feel safe, loved, and truly yourself.",
      supplemental: "N/A",
    },
    {
      readingAssignment: `"Speak No Evil", Iweala`,
      date: "November 14th, 2024",
      context: "I did this reading on Thursday and I was super tired from climbing.",
      skill: "Thematic Understanding",
      passage: "“He said Daddy had a bad case of Nigeriatoma, an acute swelling of ego and pride that effects diaspora Nigerian men, rendering them unable to accept the idea that a true home might exist outside of their home country.”",
      prompt: "What is 'Nigeriatoma'? Can you connect that personally in some way?",
      response:
        "'Nigeriatoma' is a term that highlights the intense pride and ego often found in diaspora Nigerian men, particularly those who struggle to reconcile their identity with life outside of Nigeria. In the passage, it suggests that these men hold onto the belief that their home country is the only 'true' home, leading to a sense of superiority or stubbornness. This sense of national pride can be isolating, especially when they resist embracing their new surroundings or cultures. Personally, I can connect to this idea through my own experiences of living in a different culture while maintaining a strong attachment to my roots. It reminds me of how some people, whether from Nigeria or elsewhere, can sometimes develop a sense of superiority based on their home country's values, history, or achievements. I’ve witnessed this in conversations where individuals refuse to acknowledge the beauty or strengths of other cultures, which can come across as a defense mechanism or an insecurity. There’s a certain pride in one’s heritage that, if taken too far, can create barriers rather than bridges between people. 'Nigeriatoma' seems to capture the struggle many people face when they live between two worlds: the one they come from and the one they now inhabit. It can be challenging to accept that your new place might feel like home, especially if it conflicts with how you see yourself. This passage made me reflect on the way we often hold onto our past, sometimes to our own detriment, as it prevents us from fully engaging with the present.",
      supplemental: "N/A",
    },
    {
      readingAssignment: `"The Tempest", Shakespeare`,
      date: "December 6th, 2024",
      context: "I did this reading on Thursday before our class.",
      skill: "Text-to-Self/World Connections",
      passage: " “Ceres, most bounteous lady, thy rich leas Of wheat, rye, barley, vetches, oats, and peas;” IV,I Line 67-68",
      prompt: "Write a mini-masque (or lean on AI to co-create one) that commemorates a not-so-serious moment (i.e. not a wedding) from a day in the life of an Episcopal student.",
      response:
        "A Mini-Masque: The Scholar’s Struggle in Class Meeting<br>(A dramatic and over-the-top performance commemorating the age-old battle against drowsiness during an endless school assembly.)<br>Setting: The great hall of an Episcopal school. Rows of students sit in semi-orderly fashion as the esteemed Dean Everlong stands at the podium, delivering updates that seem to stretch across centuries. Our protagonist, The Weary Scholar, sits among them, their head bobbing dangerously.<br>Enter Somnolencia, Spirit of Slumber (floating, draped in a heavy, velvety cloak, speaking in hypnotic tones)<br>'Ah, weary soul, why dost thou fight?<br>The meeting’s long, the seats too tight.<br>Let thine eyes close, let thy head bow,<br>Drift into dreams—I free thee now!'<br>Enter Caffeina, Goddess of Wakefulness (bursting in with a goblet of glowing energy, exuding boundless enthusiasm)<br>'Hold, hold, thou sluggish mind!<br>Wouldst thou let sleep leave thee behind?<br>Behold, the potion strong and sweet,<br>One sip, and wakefulness is meet!'<br>(Caffeina extends the goblet; The Weary Scholar reaches for it, but is interrupted.)<br>Enter Dean Everlong, the Tireless Orator (a wise but endlessly speaking figure, holding a scroll that rolls down the steps)<br>'Attend, dear students, harken well!<br>For news I bring—of tardy bell,<br>Of dress codes strict, of rules anew…<br>(…and tell, and tell, and tell, and tell…)'<br>(The Weary Scholar, caught between Somnolencia and Caffeina, shifts uncomfortably. Their eyelids droop. Their head tilts… then snaps back up! The battle rages on!)<br>A Chorus of Fellow Students (whispering in hushed, desperate tones)<br>'Shall they fall? Shall they fight?<br>Will their head stay upright?<br>Or shall the dreary drone o’ercome,<br>And send them to the land of numb?'<br>(At last, with great effort, The Weary Scholar lifts the cup of Caffeina to their lips, takes a sip, and—miraculously—sits upright! The battle is won! The crowd erupts in silent, respectful celebration.)<br>Finale: The Benediction of Wakefulness (Caffeina and Somnolencia exchange knowing glances.)<br>Caffeina: 'Rejoice, dear scholar, and fear thee not!<br>For lo, my gift—steaming hot—<br>Shall guard thee ‘til this meeting’s end…<br>(But heed my words—sleep well, dear friend!)'<br>(Exeunt omnes as the school bell rings, signaling the true salvation: the end of the meeting.)<br>",
      supplemental: "I prompted the AI to write about the struggle of staying awake during class meeting. It gave me a mini-masque that focused on the clash of two god-like powers, the spirit of slumber (Somnolencia) and the Godess of Wakefulness (Caffeina). I think that it encapsulates the main theme of masques, which is having powerful gods/characters talk or battle. It also has very poetic language just like Shakespeare’s plays and the masque that he created in act 4 of the tempest. One other thing it adds is a moral, which is to get enough sleep before class meetings. However, one thing that could be improved is the lack of a song or sung lyrics like what happened between Juno and Ceres. From what I read, singing seems like an important part of what makes a masque a masque. Overall, I believe that the masque written by the AI was successful in it’s goal of attempting to replicate a Shakespearean masque.",
    },
    {
      readingAssignment: `"Pet Sematary", Stephen King`,
      date: "May 5th, 2025",
      context: "I've been doing my reading while in class and also in my dorm when I have some extra time in my day.",
      skill: "Thematic Understanding",
      passage: "“He’s my cat! He’s not God’s cat! Let God have his own cat!...”",
      prompt: "What genre is your book?",
      response:
        "Stephen King wrote the book Pet Sematary and although it's not his most popular work, it's still certainly quite chilling. It's pretty obvious that the overarching genre of Pet Sematary is horror, but what type is it exactly? I haven't read too far into the book yet, so I'm still not quite sure. In the book so far, it introduces the main character who is a hospital worker for a nearby college that they just moved near. He has a wife and two kids, and a cat named 'Church' (short for Winston Churchill)...",
      supplemental: "N/A",
    },
    {
      readingAssignment: `"Pet Sematary", Stephen King`,
      date: "May 7th, 2025",
      context: "I've been reading this book while I'm on dorm during study hall if I get my work done.",
      skill: "Reading Comprehension",
      passage: "“... he could have sworn there was a path beyond, leading deeper into the woods.” (pg. 86)",
      prompt: "What is the biggest 'unknown' in your book so far?  Is it presenting any mysteries or questions?",
      response:
        "The biggest 'unknown' in my book is without a doubt the mystery of the pet semetary, and especially what lies beyond. After Louis finishes treating the first patient, that night he has a dream where his dead patient's ghost is leading him to the pet semetary and trying to tell him something important - that he shouldn't go beyond the deadfall at the back of the pet sematary. He wakes up and finds that it was real, and he really did travel to the pet semetary that night with no shoes, leaving his bed muddy in the process. He gets up and has a normal day, but he decides to do some more investigating. He travels back to the pet semetary and sees that he really was there that night, as proven by the knocked-over signs. Something comes over him and he suddenly decided to start climbing the deadfall, despite the warnings of the ghost. While almost on top, a branch snaps and he almost falls. It's revealed that he saw a glimpse of another path beyond the semetary, leading deeper yet into the woods. The mystery of the path has just been presented in the book, but it's already very important to the plot. The deadfall is portrayed in the book as a very mystical, mysterious place, acting as a barrier to whatever sinister thing surely lies beyond. It's setup as a place you should never pass not only by Jud, but also by the ghost. I believe that later in the book, Louis will eventually have to cross the deadfall, finally figuring out what dark and sinister secret lies beyond the pet sematary.",
      supplemental: "N/A",
    },
        {
      readingAssignment: `TEWWG Essay`,
      date: "May 9th, 2025",
      context: "N/A",
      skill: "N/A",
      passage: "N/A",
      prompt: "N/A",
      response:
        "What does it mean to be truly at “home”- and what happens when you feel confined at every place you live? Their Eyes Were Watching God by Zora Niel Hurston challenges every one of these questions through the emotional and physical journey of Janie Crawford. From Nanny’s yard to the Everglades with Tea Cake, Janie constantly undergoes multiple transitions from home to home that shape her emotions, and eventually, who she is as a person. The novel questions the boundaries between home as a solid space and home as defined by the freedom to be yourself. In Their Eyes Were Watching God, Hurston uses constantly changing homes, Janie’s search for true love, and her struggle with independence to write about the relationship between character and place. Zora Neale Hurston uses a constantly changing home in Their Eyes Were Watching God to mirror Janie’s shifting emotional state throughout the novel, reflecting how the places around her change her growth. Each home that Janie lives in not only defines which period of life she is in, but also her emotions. At the novel’s start, Janie’s world is filled with wonder as she sits under the pear tree, and she feels like love is something that’s natural and beautiful. She was even willing to forget how bad Logan Killicks’ house looked in order to experience love, shown with “It was a lonesome place like a stump in the middle of the woods where nobody had ever been… But anyhow Janie went on inside to wait for love to begin” (Hurston, 22). The language that she uses links the place with her emotional yearning for love. However, the wonder quickly fades as she starts moving through places that get increasingly restrictive. When she first visits Eatonville, she admits that “It is a whole heap littler than Ah thought” (34), which shows her disappointment and also the subtle restriction of her world. Their new house, “a gloaty, sparkly white” mansion demands respect from the townspeople but also isolates her (47). The over the top details of the home, like a spitoon, symbolize emotional confinement. The transition to the Everglades finally matches her openness, because “everything … was big and new” to Janie (129). Hurston uses place as not just an inanimate setting, but also to reflect Janie’s emotions. Zora Neale Hurston uses Janie’s ongoing search for love to show how physical place shapes emotional expectations. Janie’s early beliefs about love stemmed from thoughts of nature and innocence, she dreamed of nature as being a natural harmony between two people, where marriage “end[s] the cosmic loneliness of the unmated” and “compel[s] love like the sun the day” (21). However, her marriage with Logan Killicks puts her in a home where love is replaced with labor, which quickly dissolves her fantasies. When Joe Starks arrives, he promises something new - instead of love as found in nature, he “spoke for far horizon. He spoke for change and chance” (29). However, the place that Joe Starks builds is a cage, which instead of offering love like she hoped, offers only control. In contrast to that, the Everglades, which are unpredictable and alive, mirror the love Janie finds with Tea Cake, who told Janie “Nobody else on earth kin hold uh candle tuh you, baby. You got de keys to de kingdom” (109). While their relationship was still slightly imperfect, their small space gave Janie more emotional freedom than any of her previous homes. Hurston suggests that while love may forever be imperfect, home can become almost fulfilling when there’s space for honesty and joy. Zora Neale Hurston uses physical spaces to show Janie’s struggle for independence, to show how place can strongly influence Janie’s sense of self. Early in the novel, Janie feels trapped and bored in a home where her husband values her for her labor, as he reminds her “Mah fust wife never bothered me ‘bout choppin’ no wood … You done been spoilt rotten” (26). Her later move to Eatonville with Joe Starks offers initial hope, but quickly becomes a much worse version of confinement. Their home and store become tools that Joe uses to confine Janie. Hurston writes “pressed her teeth together and learned to hush. The spirit of the marriage left the bedroom and took to living in the parlor” (71), directly linking the restriction of Janie’s freedom to their home. The store especially becomes a place of tension, where Janie’s silence morphs into violence. When Janie stands up to Joe, his reaction shows how much the resistance shook the image of power he built: “And the cruel deceit of Janie! Making all that show of humbleness and scorning him all the time! Laughing at him, and now putting the town up to do the same.” (80) Hurston shows that reclaiming power from others can require disrupting the spaces that once held it, transforming places of quiet submission into places for rebellion. In conclusion, Zora Neale Hurston used a constantly changing home, Janie’s ongoing search for love, and her struggle for independence to use place to influence Janie’s feelings. Each different setting in Their Eyes Were Watching God not only represents just a location, but also a different emotional journey. Janie learns from her experiences that true freedom and love aren’t necessarily found in grand houses, but instead in self-understanding and a clear purpose in life. Hurston redefines the concept of “Home” from the start of the story to the end: it shifts from a static place where she lives to a dynamic place that shapes Janie throughout Their Eyes Were Watching God. During Janie’s journey through finding freedom and love, Hurston changes the meaning of home from not just a place of confinement, but instead to a place that reflects and even shapes who you’ve become.",
      supplemental: "N/A",
    }
    // Add more entries here
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-200 to-white py-16 px-6"
      ref={container}
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-900">
          Chapters
        </h1>

        {entries.map((entry, index) => (
          <Entry key={index} entry={entry} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Chapters;