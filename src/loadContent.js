import wiki from "wikijs";

export const loadContent = async (dogBreed) => {
  const wikiData = async () => {
    try {
      let wikiSummary;
      await wiki()
        .find(dogBreed)
        .then((page) => (wikiSummary = page.summary()));
      console.log(wikiSummary);
      await wiki()
        .pagesInCategory("Dogs") // this doesn't work for some reason, google or ask for help
        .then((list) => console.log(list));

      /// this is not working.
      return wikiSummary;
    } catch (error) {
      console.log(setContentLoadError);
      setContentLoadError(true);
    }
  };

  const dogPictures = async () => {
    try {
      const res = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images`);
      const json = await res.json();
      // make an array of random images from the returned data array.
      const randomIndex = () => Math.round(Math.random() * json.message.length);
      const picturesArray = [
        json.message[randomIndex()],
        json.message[randomIndex()],
        json.message[randomIndex()],
        json.message[randomIndex()],
      ];
      return picturesArray;
    } catch (error) {
      setContentLoadError(true);
    }
  };

  const contentData = {
    dogBreed: dogBreed,
    dogInformation: await wikiData(),
    dogPictures: await dogPictures(),
  };
  setContentData(contentData);
  return setContentDataLoaded(true);
};
