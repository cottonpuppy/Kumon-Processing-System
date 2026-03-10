from mineru import MinerU

def parse_pdf(path):

    miner = MinerU()

    result = miner.parse(path)

    text=""

    if "paragraphs" in result:

        text="\n".join(result["paragraphs"])

    return {
        "text":text
    }