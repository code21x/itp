import run from "./gemini";
import { templates } from "./template";

export default async function generateHandler(sources: any, original_prompt: string) {
    const prompt = `Available templates: \n\n" + ${JSON.stringify(templates)} + "\n\n" +
              "Original Topic: " + ${original_prompt} + "\n\n" + """
You are an advanced assistant that is in charge of aggregating multiple sources of information into a lecture based on a specific prompt.
Output 8 different slides on the topic given above using the sources provided as well as the given templates.
Make sure the slides flow logically and are easy to understand. Use the correct templates for the content you are presenting.
Keep text content short and concise, at most 8 words per text.
Make sure you always start off with a title slide.
Every time provide a different image as required for getting the concepts cleared.

Try to make each slide have different information.

Return a json parsable string of lectures that are generated from the sources provided.
Make sure the response is in the following format, only output the keys and values shown below:
{
    "title": title of the lecture,
    "description" : description of the lecture,
    "slides": [
        {
          "title": title of the slide,,
          "template_id": 1,
          "texts" : [
              "a stack is a data structure",
              "stacks are used in DFS"
          ],
          "speaker_notes" : A script for the speaker to read
        }
        "images": [
                "https://imageurl.com/linkedlist.jpg"
        ]
    ]
}`
    const lecture = await run(sources + prompt);
    return lecture
}

