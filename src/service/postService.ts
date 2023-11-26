import { Post } from "../model/post";
import { getPostAnalytics, savePostToDB } from "../repository/postRepository";


function performWordAnalytics(content: String){
    const words = content.split(/\s+/).filter(word => word.trim() !== '')

    const totalWordCount = words.length;

    const totalCharacterCount = content.replace(/\s/g, '').length;

    const averageWordLength = totalCharacterCount / totalWordCount;

    return {
        totalWordCount,
        averageWordLength: isNaN(averageWordLength) ? 0 : averageWordLength,
    };
}

export async function createNewPost(post: Post) {
    var wordAnalytics = performWordAnalytics(post.content)
    post.total_word_count = wordAnalytics.totalWordCount
    post.average_word_length = wordAnalytics.averageWordLength
    await savePostToDB(post);
}

export async function GetPostAnalysis(id: string) {
    return await getPostAnalytics(id)
}
