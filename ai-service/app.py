from flask import Flask,request,jsonify
from parser import parse_pdf
from extractor import extract_info
from ai_service import analyze_text
from generator import generate_doc

app = Flask(__name__)

# 全局异常处理
@app.errorhandler(Exception)
def handle_exception(e):
    return jsonify({
        "error": str(e),
        "message": "An error occurred. Please check your input."
    }), 400

# PDF解析接口
@app.route("/parse",methods=["POST"])
def parse():

    data=request.json

    path=data["path"]

    result=parse_pdf(path)

    info=extract_info(result["text"])

    ai=analyze_text(result["text"])

    return jsonify({
        "title":info["title"],
        "doc_number":info["doc_number"],
        "date":info["date"],
        "content":result["text"],
        "keywords":ai["keywords"],
        "summary":ai["summary"]
    })


# AI分析接口
@app.route("/ai/analyze",methods=["POST"])
def analyze():

    text=request.json["text"]

    if not text:
        return jsonify({"error":"文本不能为空"}),400

    result=analyze_text(text)

    return jsonify(result)


# 公文生成
@app.route("/ai/generate",methods=["POST"])
def generate():

    data=request.json

    if "type" not in data or "topic" not in data or "requirement" not in data:

        return jsonify({"error":"缺少必要参数"}),400

        result=generate_doc(
        data["type"],
        data["topic"],
        data["requirement"]
    )

    return jsonify({
        "content":result
    })


if __name__=="__main__":
    app.run(host="0.0.0.0",port=8001)