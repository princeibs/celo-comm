// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

interface IERC20Token {
    function transfer(address, uint256) external returns (bool);

    function approve(address, uint256) external returns (bool);

    function transferFrom(
        address,
        address,
        uint256
    ) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address) external view returns (uint256);

    function allowance(address, address) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

contract DBlog {
    struct Seller {
        address payable sellerAddress;
        string message;
        uint256 qty;
    }
    struct Comment {
        string postSlug;
        address payable commenterAddress;
        string commentMessage;
    }
    struct Post {
        uint256 id;
        string slug;
        string coverImgUrl;
        address payable authorAddress;
        string title;
        string content;
        string datePublished;
        address[] likes;
    }

    // State variables
    uint256 private postIndex = 0;
    string[] public slugs; // used to iterater over posts mapping
    mapping(string => Post) public postsMapping;
    mapping(string => Comment[]) public commentsMapping;
    address internal cUsdTokenAddress =
        0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1;

    // create new post
    function createPost(
        string memory _slug,
        string memory _coverImgUrl,
        string memory _title,
        string memory _content,
        string memory _datePublished
    ) public {
        address[] memory likes;
        slugs.push(_slug);
        postsMapping[_slug] = Post(
            postIndex++,
            _slug,
            _coverImgUrl,
            payable(msg.sender),
            _title,
            _content,
            _datePublished,
            likes
        );
    }

    // get post details using post slug
    function getPost(string memory _slug)
        public
        view
        returns (
            uint256 id,
            string memory slug,
            string memory coverImgUrl,
            address payable authorAddress,
            string memory title,
            string memory content,
            string memory datePublished,
            address[] memory likes,
            Comment[] memory comments
        )
    {
        Post memory post = postsMapping[_slug];
        id = post.id;
        slug = post.slug;
        coverImgUrl = post.coverImgUrl;
        authorAddress = post.authorAddress;
        title = post.title;
        content = post.content;
        datePublished = post.datePublished;
        likes = post.likes;

        // get comments
        comments = commentsMapping[_slug];
    }

    //
    function getPostLength() public view returns (uint256) {
        return postIndex;
    }

    //
    function getSlugs() public view returns (string[] memory) {
        return slugs;
    }

    // like a post
    function likePost(string memory _postSlug) public {
        postsMapping[_postSlug].likes.push(payable(msg.sender));
    }

    // un-like a post
    function unlikePost(string memory _postSlug) public {
        address[] storage likesArr = postsMapping[_postSlug].likes;
        for (uint256 i = 0; i < likesArr.length; i++) {
            if (likesArr[i] == payable(msg.sender)) {
                // replace the element to delete with the last element in array
                likesArr[i] = likesArr[likesArr.length - 1];
                likesArr.pop(); // remove the last element
                break;
            }
        }
    }

    // buy a coffee
    function buyCoffee(string memory _postSlug, uint256 _amount)
        public
        payable
    {
        require(
            IERC20Token(cUsdTokenAddress).transferFrom(
                msg.sender,
                postsMapping[_postSlug].authorAddress,
                _amount
            ),
            "Transfer failed."
        );
    }

    // make comment on a post
    function makeComment(string memory _slug, string memory _commentMessage)
        public
    {
        Comment memory newComment = Comment(
            _slug,
            payable(msg.sender),
            _commentMessage
        );
        commentsMapping[_slug].push(newComment);
    }
}
