import React from 'react';
import './css/Write.css';
function Write(){
    return(
        <div>
            <div className = "search-box">
                <input type="text" id="search"/>
                <button className="btn-search">검색하기</button>
            </div>

            <div className = "input-Board">
                <form>
                    <div className = 'bar2'>
                        <h1>Title</h1>
                    </div>
                    <input name='title' type="text" className="search-input"/>
                    <div className = 'bar2'>
                        <h1>content</h1>
                    </div>
                    <table className="content_table">
						<tr>
							<td><textarea name="content" className="content" id="content"></textarea>
							</td>
						</tr>
					</table>
                    <button className="d-btn" type="submit">등록</button>
                </form>
            </div>
        </div>

    );
}

export default Write;