likePress = async () => {
    let isRed = false;
    if (this.state.likeIcon === "white") {
        this.setState({ likeIcon: "red" });
        isRed = true;
    }
    if (isRed) {
        try {
            const response = await fetch("some url" + product._id, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ like: this.state.product._id })
            });
            const json = await response.json();
            this.setState({
                likeIcon: "red",
                data: json
            });
            console.log(_id, "id");
            console.log(
                result,
                JSON.stringify({
                    like: this.state.product._id
                })
            );
        } catch (error) {
            console.error(error);
        }
    }
};