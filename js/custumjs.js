const clostBtn = document.querySelector('.close-btn');
const modalWindow = document.querySelector('#modal');
const modalContent = document.querySelector('.modal-content');
const detailPage = document.querySelector('.detailPage');
const reviewPage = document.querySelector('.reviewPage');
const qndPage = document.querySelector('.qnaPage');
const guidePage = document.querySelector('.guidePage');

clostBtn.addEventListener('click', function() {
        modalWindow.style.display = 'none';
})

detailPage.addEventListener('click', function() {
        modalWindow.style.display = 'block';
        modalContent.textContent = `{$product_detail}`;
})

reviewPage.addEventListener('click', function() {
        modalWindow.style.display = 'block';
        modalContent.innerHTML = `<div module="product_review">
					<!--@js(/js/module/product/review.js)-->
					<a name="use_review"></a>
					<p class="noAccess {$deny_display|display}">글읽기 권한이 없습니다.</p>
					<div class="minor {$adult_display|display}">
						<p><img src="//img.echosting.cafe24.com/skin/skin/product/ico_under19.gif" loading="lazy" ez-prevent="img"> <strong class="txtEm">"19세 미만의 미성년자"</strong>는 출입을 금합니다!</p>
						<p class="button"><a href="/intro/board.html{$returnParam}" class="btnSubmit sizeS">성인인증 하기</a></p>
					</div>
					<div class="ec-base-table typeList">
						<table border="1" class="{$list_display|display}">
							<caption>상품사용후기</caption>
							<colgroup>
								<col style="width:70px;" class="RW">
								<col style="width:auto">
								<col style="width:100px;">
								<col style="width:100px;">
								<col style="width:80px;">
								<col style="width:80px;" class="{$use_point_display|display}">
							</colgroup>
							<thead>
								<tr>
									<th scope="col" class="RW">번호</th>
									<th scope="col">제목</th>
									<th scope="col">작성자</th>
									<th scope="col">작성일</th>
									<th scope="col">조회</th>
									<th scope="col" class="{$use_point_display|display}">평점</th>
								</tr>
							</thead>
							<tbody class="center">
								<tr class="{$block_target_class}" {$block_data_attr}>
									<td class="RW">{$no}</td>
									<td class="subject left txtBreak">{$icon_re}{$icon_lock} <a href="{$link_board_detail}{$param_read}" class="{$block_content_class}">{$subject}</a> {$icon_file}<span class="comment">{$comment_count}</span>{$icon_hit}{$icon_new}</td>
									<td>{$member_icon} {$writer}</td>
									<td>{$write_date}</td>
									<td>{$hit_count}</td>
									<td class="{$use_point_display|display}"><img src="//img.echosting.cafe24.com/skin/skin/board/icon-star-rating{$point_count}.svg" alt="{$point_count}점" loading="lazy" ez-prevent="img"></td>
								</tr>
								<tr class="{$block_target_class}" {$block_data_attr}>
									<td class="RW">{$no}</td>
									<td class="subject left txtBreak">{$icon_re}{$icon_lock} <a href="{$link_board_detail}{$param_read}" class="{$block_content_class}">{$subject}</a> {$icon_file}<span class="comment">{$comment_count}</span>{$icon_hit}{$icon_new}</td>
									<td>{$member_icon} {$writer}</td>
									<td>{$write_date}</td>
									<td>{$hit_count}</td>
									<td class="{$use_point_display|display}"><img src="//img.echosting.cafe24.com/skin/skin/board/icon-star-rating{$point_count}.svg" alt="{$point_count}점" loading="lazy" ez-prevent="img"></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
                                <div module="product_reviewpaging" class="ec-base-paginate typeList">
					<a href="{$param_first}" class="first">첫 페이지</a>
					<a href="{$param_before}">이전 페이지</a>
					<ol>
						<li><a href="{$param}" class="{$param_class}">{$no}</a></li>
						<li><a href="{$param}" class="{$param_class}">{$no}</a></li>
						<li><a href="{$param}" class="{$param_class}">{$no}</a></li>
						<li><a href="{$param}" class="{$param_class}">{$no}</a></li>
						<li><a href="{$param}" class="{$param_class}">{$no}</a></li>
					</ol>
					<a href="{$param_next}">다음 페이지</a>
					<a href="{$param_last}" class="last">마지막 페이지</a>
				</div>
                                `;
})

qndPage.addEventListener('click', function() {
        modalWindow.style.display = 'block';
        modalContent.innerHTML = `<div id="prdQnA">
                                        <div class="{$qna_display|display}">
                                                <div class="board_title">
                                                        <h2>Q&amp;A</h2>
                                                        <div class="ec-base-button">
                                                                <a href="{$qna_list}" class="btnNormalFix">LIST</a>
                                                                <a href="{$qna_write}" class="btnNormalFix">WRITE</a>
                                                        </div>
                                                </div>
                                                <div class="contents">
                                                        <div module="product_qna">
                                                                <!--@js(/js/module/product/qna.js)-->
                                                                <a name="use_qna"></a>
                                                                <p class="noAccess {$deny_display|display}">글읽기 권한이 없습니다.</p>
                                                                <div class="minor {$adult_display|display}">
                                                                        <p><img src="//img.echosting.cafe24.com/skin/skin/product/ico_under19.gif" loading="lazy" ez-prevent="img"> <strong>"19세 미만의 미성년자"</strong>는 출입을 금합니다!</p>
                                                                        <p class="button"><a href="/intro/board.html{$returnParam}" class="btnEm sizeS">성인인증 하기</a></p>
                                                                </div>
                                                                <div class="ec-base-table typeList">
                                                                        <table border="1" class="{$list_display|display}">
                                                                                <caption>상품 Q&amp;A</caption>
                                                                                <colgroup>
                                                                                        <col style="width:70px;" class="RW">
                                                                                        <col style="width:134px;">
                                                                                        <col style="width:auto">
                                                                                        <col style="width:80px;">
                                                                                        <col style="width:100px;">
                                                                                        <col style="width:55px;">
                                                                                </colgroup>
                                                                                <thead>
                                                                                        <tr>
                                                                                                <th scope="col" class="RW">번호</th>
                                                                                                <th scope="col">카테고리</th>
                                                                                                <th scope="col">제목</th>
                                                                                                <th scope="col">작성자</th>
                                                                                                <th scope="col">작성일</th>
                                                                                                <th scope="col">조회</th>
                                                                                        </tr>
                                                                                </thead>
                                                                                <tbody class="center">
                                                                                        <tr class="{$block_target_class}" {$block_data_attr}>
                                                                                                <td class="RW">{$no}</td>
                                                                                                <td>{$category_name}</td>
                                                                                                <td class="subject left txtBreak">{$icon_re}{$icon_lock} <a href="{$link_board_detail}{$param_read}" class="{$block_content_class}">{$subject}</a> {$icon_file}<span class="comment">{$comment_count}</span>{$icon_hit}{$icon_new}</td>
                                                                                                <td>{$member_icon} {$writer}</td>
                                                                                                <td>{$write_date}</td>
                                                                                                <td>{$hit_count}</td>
                                                                                        </tr>
                                                                                        <tr class="{$block_target_class}" {$block_data_attr}>
                                                                                                <td class="RW">{$no}</td>
                                                                                                <td>{$category_name}</td>
                                                                                                <td class="subject left txtBreak">{$icon_re}{$icon_lock} <a href="{$link_board_detail}{$param_read}" class="{$block_content_class}">{$subject}</a> {$icon_file}<span class="comment">{$comment_count}</span>{$icon_hit}{$icon_new}</td>
                                                                                                <td>{$member_icon} {$writer}</td>
                                                                                                <td>{$write_date}</td>
                                                                                                <td>{$hit_count}</td>
                                                                                        </tr>
                                                                                </tbody>
                                                                        </table>
                                                                </div>
                                                        </div>
                                                        <div module="product_qnapaging" class="ec-base-paginate typeList">
                                                                <a href="{$param_first}" class="first">첫 페이지</a>
                                                                <a href="{$param_before}">이전 페이지</a>
                                                                <ol>
                                                                        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
                                                                        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
                                                                        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
                                                                        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
                                                                        <li><a href="{$param}" class="{$param_class}">{$no}</a></li>
                                                                </ol>
                                                                <a href="{$param_next}">다음 페이지</a>
                                                                <a href="{$param_last}" class="last">마지막 페이지</a>
                                                        </div>
                                                </div>
                                        </div><!-- //상품문의 -->
                                </div><!-- //prdQnA -->
                                `
})

guidePage.addEventListener('click', function() {
        modalWindow.style.display = 'block';
        modalContent.innerHTML = `<div class="detail_guide">
                                        <div class="ec-base-fold theme1 selected eToggle">
                                                <div class="title">
                                                        <h2>PAYMENT INFO</h2>
                                                </div>
                                                <div class="contents">
                                                        <div class="info">
                                                                {$payment_info}
                                                        </div>
                                                </div>
                                        </div>

                                        <div class="ec-base-fold theme1 selected eToggle">
                                                <div class="title">
                                                        <h2>DELIVERY INFO</h2>
                                                </div>
                                                <div class="contents">
                                                        <ul class="info delivery">
                                                                <li>배송 방법 : {$shipping_method}</li>
                                                                <li>배송 지역 : {$shipping_area}</li>
                                                                <li>배송 비용 : {$shipping_fee}</li>
                                                                <li>배송 기간 : {$shipping_period}</li>
                                                                <li>배송 안내 : {$shipping_info}</li>
                                                        </ul>
                                                </div>
                                        </div>

                                        <div class="ec-base-fold theme1 selected eToggle">
                                                <div class="title">
                                                        <h2>EXCHANGE INFO</h2>
                                                </div>
                                                <div class="contents">
                                                        <div class="info">
                                                                {$exchange_info}
                                                        </div>
                                                </div>
                                        </div>

                                        <div class="ec-base-fold theme1 selected eToggle">
                                                <div class="title">
                                                        <h2>SERVICE INFO</h2>
                                                </div>
                                                <div class="contents">
                                                        <div class="info">
                                                                {$service_info}
                                                        </div>
                                                </div>
                                        </div>
                                </div><!-- //detail_guide -->
                        `
})