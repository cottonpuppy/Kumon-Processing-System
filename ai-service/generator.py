def generate_doc(doc_type,topic,requirement):

    if doc_type=="通知":

        content=f"""
关于{topic}的通知

各有关单位：

为贯彻落实{topic}工作要求，现将有关事项通知如下：

一、总体要求  
{requirement}

二、工作安排  
各单位要认真落实相关工作，确保任务顺利推进。

三、工作要求  
请各单位高度重视，加强组织实施。

特此通知。
"""

    elif doc_type=="请示":

        content=f"""
关于{topic}的请示

上级主管部门：

为推进{topic}工作，根据实际需要，现将有关情况请示如下：

{requirement}

以上请示，妥否，请批示。
"""

    else:

        content=f"{topic}公文草稿：{requirement}"

    return content