import React from "react";

function Sidebar() {



	function toggleMinimize(){
		let sidebar = document.querySelector('.sidebar');
		sidebar.classList.toggle('active');
	}

	function sidebarSearch(){
		let sidebar = document.querySelector('.sidebar');
		sidebar.classList.toggle('active');
	}


	return (
		<div className="sidebar text-start">
			<div className="logo_content">
				<div className="logo">
					<i class="bx bxl-c-plus-plus"></i>
					<div className="logo_name">Afsoridev</div>
				</div>
				<i class="bx bx-menu" id="btn" onClick={toggleMinimize}></i>
			</div>
			<ul className="nav_list">
				<li>
					<i class="bx bx-search" onClick={sidebarSearch}></i>
					<input type="text" placeholder="Search"></input>
					<span className="tooltip_menu">Search</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-grid-alt"></i>
						<span className="links_name">Dashboard</span>
					</a>
					<span className="tooltip_menu">Dashboard</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-user"></i>
						<span className="links_name">User</span>
					</a>
					<span className="tooltip_menu">User</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-chat"></i>
						<span className="links_name">Messages</span>
					</a>
					<span className="tooltip_menu">Messages</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-pie-chart-alt-2"></i>
						<span className="links_name">Analytics</span>
					</a>
					<span className="tooltip_menu">Analytics</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-folder"></i>
						<span className="links_name">File Manager</span>
					</a>
					<span className="tooltip_menu">File Manager</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-cart-alt"></i>
						<span className="links_name">Order</span>
					</a>
					<span className="tooltip_menu">Order</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-heart"></i>
						<span className="links_name">Saved</span>
					</a>
					<span className="tooltip_menu">Saved</span>
				</li>
				<li>
					<a href="/">
						<i class="bx bx-cog"></i>
						<span className="links_name">Setting</span>
					</a>
					<span className="tooltip_menu">Setting</span>
				</li>
			</ul>
			<div className="profile_content">
				<div className="profile">
					<div className="profile_details">
						<div className="image_user">
							<i class="bx bx-user"></i>
						</div>
						{/* <img src=""></img> */}
						<div className="name_job">
							<div className="name">Shakhh</div>
							<div className="job">Frontend Developer</div>
						</div>
					</div>
					<i class="bx bx-log-out" id="log_out"></i>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
