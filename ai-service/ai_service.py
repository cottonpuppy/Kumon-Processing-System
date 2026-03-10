import jieba.analyse
from sumy.parsers.plaintext import PlaintextParser
from sumy.nlp.tokenizers import Tokenizer
from sumy.summarizers.lsa import LsaSummarizer

def extract_keywords(text):

    keywords=jieba.analyse.extract_tags(text,5)

    return keywords


def summarize(text):

    parser = PlaintextParser.from_string(text, Tokenizer("chinese"))

    summarizer = LsaSummarizer()

    summary = summarizer(parser.document, 2)

    result=""

    for sentence in summary:

        result+=str(sentence)

    return result


def analyze_text(text):

    return {

        "keywords":extract_keywords(text),

        "summary":summarize(text)

    }