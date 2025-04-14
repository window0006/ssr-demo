import csv
from googlesearch import search
import requests
from bs4 import BeautifulSoup
import time
import urllib.parse

# 用户自定义关键词列表（基于之前的越南语关键词）
keywords = [
    "gửi hàng Việt Nam",
    "dịch vụ chuyển phát nhanh",
    "công ty vận chuyển uy tín",
    "gửi hàng đi tỉnh giá rẻ",
    "vận chuyển cho shop online",
    "gửi hàng shopee lazada",
    "đối tác vận chuyển cho seller",
    "bảng giá chuyển phát 2024",
    "gửi hàng tiết kiệm",
    "so sánh giá vận chuyển",
    # 长尾关键词
    "cách chọn công ty chuyển phát tốt",
    "đánh giá dịch vụ vận chuyển [shopee express]"
    "thời gian gửi hàng Hà Nội vào Sài Gòn",
    "chuyển phát có bồi thường không",
    # 本地化关键词
    "chuyển phát nhanh nội thành HCM",
    "gửi hàng đi Đà Nẵng",
    "vận chuyển hàng dễ vỡ",
    "gửi hàng hóa lớn",
    # 竞品对标关键词
    "dịch vụ giống GHN",
    "gửi hàng rẻ hơn GHTK",
    # 用户痛点关键词
    "chuyển phát hay mất hàng",
    "công ty vận chuyển hỗ trợ đổi trả",
    "liên hệ chuyển phát nhanh 24/7"
]

# 输出CSV文件
output_file = "google_search_results.csv"

# 自定义User-Agent
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}

def get_related_searches(url):
    """获取谷歌底部的'相关搜索'关键词"""
    try:
        response = requests.get(url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.text, 'html.parser')
        related = soup.find_all("div", {"class": "card-section"})
        related_searches = [rs.get_text() for rs in related]
        return ", ".join(related_searches)
    except Exception as e:
        print(f"获取相关搜索失败: {e}")
        return ""

def scrape_google_results(keyword, num_pages=5):
    """抓取谷歌搜索结果"""
    results = []
    try:
        # 使用新的 search 方法定义
        search_results = search(
            term=keyword,
            num_results=num_pages * 10,  # 每页 10 条
            lang="vi",  # 设置语言为越南语
            sleep_interval=2,  # 避免请求过快被封
        )
        
        for idx, url in enumerate(search_results):
            if idx >= 10 * num_pages:  # 限制前10页
                break
            try:
                # 检查是否包含目标网站 spx.vn
                has_spx = "1" if "spx.vn" in url else "0"
                
                # 获取页面标题
                response = requests.get(url, headers=headers, timeout=5)
                soup = BeautifulSoup(response.text, 'html.parser')
                title = soup.title.string if soup.title else "无标题"
                
                # 获取相关搜索（仅第一页）
                related_searches = ""
                if idx < 10:  # 仅第一页的前10条
                    related_searches = get_related_searches(f"https://www.google.com/search?q={urllib.parse.quote(keyword)}")
                
                results.append({
                    "keyword": keyword,
                    "has_spx": has_spx,
                    "title": title,
                    "url": url,
                    "related_searches": related_searches
                })
                print(f"已处理: {keyword} - 第 {idx + 1} 条")
            except Exception as e:
                print(f"处理 {url} 时出错: {e}")
                continue
    except Exception as e:
        print(f"搜索 {keyword} 时出错: {e}")
    return results

def main():
    all_results = []
    for keyword in keywords:
        print(f"正在搜索关键词: {keyword}")
        results = scrape_google_results(keyword)
        all_results.extend(results)
        time.sleep(10)  # 避免频繁请求
    
    # 写入CSV
    with open(output_file, mode='w', encoding='utf-8', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=["keyword", "has_spx", "title", "url", "related_searches"])
        writer.writeheader()
        writer.writerows(all_results)
    print(f"数据已保存到 {output_file}")

if __name__ == "__main__":
    main()