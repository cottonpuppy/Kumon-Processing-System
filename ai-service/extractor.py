import re

def extract_title(text):

    lines=text.split("\n")

    for line in lines[:5]:

        if "通知" in line or "决定" in line or "报告" in line:

            return line.strip()

    return lines[0]


def extract_doc_number(text):

    pattern=r"〔\d{4}〕\d+号"

    match=re.search(pattern,text)

    if match:

        return match.group()

    return None


def extract_date(text):

    pattern=r"\d{4}年\d{1,2}月\d{1,2}日"

    match=re.search(pattern,text)

    if match:

        return match.group()

    return None


def extract_info(text):

    return {

        "title":extract_title(text),

        "doc_number":extract_doc_number(text),

        "date":extract_date(text)

    }