import { Accordion } from "react-bootstrap";
import renderHTML from "react-render-html";

const AccordionItem = () => {
  const data = [
    {
      title: `Minting Date`,
      description: [
        `Official launch date will be announced soon. Follow on <a href="https://discord.gg/kZquzB6Aes" target="_blank" rel="noOpener">Discord</a> and <a href="https://twitter.com/ShadowQuest_NFT" target="_blank" rel="noOpener">Twitter</a> to be the first to know.`,
      ],
    },
    {
      title: `Minting Price`,
      description: [
        `Official launch price will also be announced soon. Follow on <a href="https://discord.gg/kZquzB6Aes" target="_blank" rel="noOpener">Discord</a> and <a href="https://twitter.com/ShadowQuest_NFT" target="_blank" rel="noOpener">Twitter</a> to be the first to know.`,
      ],
    },
    {
      title: `How many Gen0 Warriors are there available to mint?`,
      description: [
        `There will be 9,996 Gen0 Warriors, of which 999 will be Dark Samsar warriors`,
        `There will be 18,000 Gen1 Warriors that are mintable. Of these, there will be 1,800 Dark Samsar warriors.`,
      ],
    },
    {
      title: `What do I earn by staking?`,
      description: [`$HONR`],
    },
    {
      title: `What can I use $HONR for?`,
      description: [
        `From Day 1: Minting Gen1 Warriors. In the future, weapons and armor for stats boosts. $HONR will also be swappable on Uniswap with significant liquidity backing. `,
      ],
    },
    {
      title: `When can I start staking?`,
      description: [`Staking will be available immediately after minting!`],
    },
    {
      title: `What determines a Warrior’s rarity?`,
      description: [
        `Warriors not only have 5 battle stats, but they are high quality generative art with detailed features with inspiration drawn from many classic manga comics.`,
        `Stats are split into 5 attributes each with their own use in battle.`,
        `They are generated during minting and designed to be balanced but vary greatly from Warrior to Warrior.`,
        `As a result each Warrior will have different strengths and weaknesses in battle.`,
      ],
    },
    {
      title: `WE LOVE LORE! Can I really submit any type of writing as lore?`,
      description: [
        `Yes! We welcome all forms of writing as lore and will work to incorporate it into the over-arching storyline.`,
        `This includes: short stories, flash fiction, snippets, poems, haikus, songs, limericks, riddles, and anything in between!`,
        `Check out <a href="https://www.shadowquest.games/lore" target="_blank" rel="noOpener">LORE</a> for what we have so far, and the <a href="https://discord.gg/kZquzB6Aes" target="_blank" rel="noOpener">Discord</a> for more!`,
      ],
    },
    {
      title: `How can I submit lore to be showcased on the website?`,
      description: [
        `The best place is in the <a href="https://discord.gg/kZquzB6Aes" target="_blank" rel="noOpener">Discord</a> server, specifically in the #fan-lore channel.`,
        `We will always have mods (and lots of the community) keeping an eye out for any new lore.`,
      ],
    },
  ];
  return (
    <div>
      <Accordion
        defaultActiveKey="0"
        className="c-faq-item-2"
        flush
        style={{ background: "#19181D" }}
      >
        {data.map((el, i) => {
          return (
            <Accordion.Item
              eventKey={i}
              className="p-0 text-white mt-2"
              style={{ backgroundColor: "rgb(32, 33, 37)" }}
            >
              <Accordion.Header className="text-white">
                {el.title}
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  <ul>
                    {el.description.map((el, i) => {
                      return (
                        <li className="text-transform-none font-16 font-sm-14">
                          {renderHTML(el)}
                        </li>
                      );
                    })}
                  </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};
export default AccordionItem;
